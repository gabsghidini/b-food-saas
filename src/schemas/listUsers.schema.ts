import { getUserByIdSchema } from "../schemas";
import * as yup from "yup";

const listUsersSchema = yup.array(getUserByIdSchema);

export default listUsersSchema;
