import { Router } from "express";

export default interface ControllerInterface {
    routes(): Router
}