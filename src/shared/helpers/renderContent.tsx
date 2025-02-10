import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit/react";
import Loader from "../ui/Loader/Loader";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";

type Props<T> = {
  isLoading: boolean,
  error: FetchBaseQueryError | SerializedError | undefined | Error;
  data: T | undefined;
  RenderComponent?: JSX.Element | null;
  EmptyComponent: JSX.Element;
}

export const renderContent = <T,>({
  isLoading,
  error,
  data,
  RenderComponent,
  EmptyComponent,
}: Props<T>) => {
  if (isLoading) return <Loader />
  if (error) return <ErrorMessage error={error} />
  if (!data) return EmptyComponent

  return RenderComponent;
};
