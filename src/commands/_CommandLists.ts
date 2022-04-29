import { Command } from "../interfaces/Command";
import { help } from "./help";
import { ping } from "./ping";
import { stats } from "./stats";

export const CommandList: Command[] = [ping, help, stats];
