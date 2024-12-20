import { ApiErrorResponse, ApiSuccessResponse } from "@/lib/utils";
import { NextRequest } from "next/server";
import AtAGlanceData from "./data.json";

type AtAGlanceData = {
  duration: "7days" | "1month" | "6months" | "1year";
};

const DURATION_KEYS: AtAGlanceData["duration"][] = [
  "7days",
  "1month",
  "6months",
  "1year",
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const duration = searchParams.get("duration") as AtAGlanceData["duration"];
    console.log("duration :", duration);

    if (!duration) {
      return ApiErrorResponse(400, "Duration is required");
    } else if (DURATION_KEYS.includes(duration)) {
      return ApiSuccessResponse(
        200,
        AtAGlanceData?.[duration as AtAGlanceData["duration"]],
        "At a glance retrieved successfully"
      );
    } else {
      return ApiErrorResponse(
        400,
        "Duration can be one of 7days, 1month, 6months, 1year"
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return ApiErrorResponse(500, error?.message);
    } else {
      return ApiErrorResponse(500);
    }
  }
}
