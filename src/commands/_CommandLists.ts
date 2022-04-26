import { Command } from "../interfaces/Command";
import { help } from "./help";
import { ping } from "./ping";

export const CommandList: Command[] = [ping, help];
