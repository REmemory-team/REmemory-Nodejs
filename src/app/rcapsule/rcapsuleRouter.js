import express from "express";
import asyncHandler from "express-async-handler";

import { createRcapsule } from "./rcapsuleController";

export const rcapsuleRouter = express.Router();

rcapsuleRouter.post('/create', asyncHandler(createRcapsule));