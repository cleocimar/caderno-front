import { ModelBase } from "./models-base";

export class Usuario extends ModelBase {
    username: string;
    nome: string;
    apelido: string;
    password: string;
    perfil: string;
    is_superuser: Boolean;
    is_staff: Boolean;
}

