import PropTypes from "prop-types";

import { ClientErrorSVG } from "../components/ErrorSvgs/ClientErrorSVG";
import { ServerErrorSVG } from "../components/ErrorSvgs/ServerErrorSVG";

export const ErrorPage = ({ statusCode }) => {
  // Set error message and description based on the error code
  const getErrorDetails = () => {
    switch (statusCode) {
      case 400:
        return {
          errorMessage: "400 - Bad Request",
          errorDescription:
            "Oops..! The server cannot process the request due to the client error.",
        };
      case 404:
        return {
          errorMessage: "404 - Page not found",
          errorDescription:
            "Oops..! The page you are looking for doesn't exist or has been removed.",
        };
      default:
        return {
          errorMessage: "500 - Internal Server Error",
          errorDescription:
            "Oops..! An unexpected condition was encountered on the server. Try to refresh this page or feel free to contact us if the problem persists.",
        };
    }
  };

  const { errorMessage, errorDescription } = getErrorDetails();

  return (
    <div className="mb-3 flex min-h-[calc(100vh-250px)] w-full items-center justify-center rounded-3xl bg-secondary-300 p-5">
      <div className="text-center">
        {statusCode >= 400 && statusCode < 500 ? (
          <ClientErrorSVG />
        ) : (
          <ServerErrorSVG />
        )}
        <h1 className="mt-5 text-2xl font-bold text-accent-950 lg:text-4xl">
          {errorMessage}
        </h1>
        <p className="mt-5 text-accent-800 lg:text-lg">{errorDescription}</p>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};
