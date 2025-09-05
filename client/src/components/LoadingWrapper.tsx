import React, { ReactNode } from "react";
import spinner from "@/assets/spinner.gif"; // Importing the spinner GIF for the loading animation

interface LoadingWrapperProps {
  children: ReactNode; // The child components to render after loading is complete
  isLoading: boolean; // Loading state passed from parent
  error?: unknown; // Optional error state
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  isLoading,
  error,
}) => {
  // Show loading spinner if loading or if there's an error
  const shouldShowSpinner = isLoading || error;

  return shouldShowSpinner ? (
    // When still loading, show the spinner in the center of the screen
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centers the spinner horizontally
        alignItems: "center", // Centers the spinner vertically
        height: "100%", // Full height of the parent container
        width: "100%", // Full width of the parent container
      }}
    >
      <img src={spinner} alt="Loading..." width="60" />{" "}
      {/* The loading spinner */}
    </div>
  ) : (
    // Once loading is complete, render the child components
    <>{children}</>
  );
};

export default LoadingWrapper;
