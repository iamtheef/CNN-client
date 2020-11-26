import React, { createContext, useState, useContext, useEffect } from "react";
import { InputContext } from "../Context/Input";
import { ValidateRequest, IRequest } from "../Utils/ValidateRequest";
import { uploadImg } from "../Utils/UploadImage";
import { useHistory } from "react-router-dom";
import { client } from "../Utils/axios";
import { sleep } from "../Utils/sleep";

type Props = {
  children: React.ReactNode;
};

type IPrediction = {
  success: boolean;
  message: string | undefined;
};

export const PredictionContext = createContext<any>(undefined);

export function PredictionProvider({ children }: Props) {
  const [prediction, setPrediction] = useState<IPrediction>({
    success: false,
    message: undefined,
  });
  const { file, isLink, input } = useContext(InputContext);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hits, setHits] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  const history = useHistory();

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const countHits = () => {
    setHits(hits + 1);
    sleep(2000).then(() => {
      setHits(0);
    });
    if (hits === 4) {
      history.push("/easter");
    }
  };

  const predict = async () => {
    countHits();
    if (hits > 1 || !isMounted) return;
    let req: IRequest = { file, isLink, input };
    let checkRequest = ValidateRequest(req);

    if (checkRequest.isOK) {
      setIsLoading(true);
      if (!isLink && !!file) {
        try {
          await uploadImg(file);
        } catch (e) {
          setError(e.message);
        }
      }
      client
        .post("/predict/", req)
        .then((res) => {
          if (res.status === 200) {
            setPrediction(res.data);
            setIsLoading(false);
          } else {
            setError(res.statusText.toLowerCase());
            setIsLoading(false);
          }
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.message);
        });
    } else {
      setError(checkRequest.errors[0]);
    }
  };

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        setPrediction,
        predict,
        error,
        setError,
        isLoading,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}
