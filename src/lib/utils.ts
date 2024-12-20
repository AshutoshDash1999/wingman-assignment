import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ApiSuccessResponse = (
  statusCode: number,
  data: unknown,
  message: string
) => {
  return Response.json(
    {
      success: true,
      data,
      message,
    },
    {
      status: statusCode,
    }
  );
};

export const ApiErrorResponse = (
  statusCode: number,
  error: string = "An unexpected error occurred"
) => {
  return Response.json(
    {
      error,
      success: false,
    },
    {
      status: statusCode,
    }
  );
};
