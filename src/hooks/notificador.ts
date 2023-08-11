import { TipoNotificacao } from "@/interfaces/INotificacoes";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipoMutacoes";

type Notificador = {
  notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void;
};

export default (): Notificador => {
  const notificar = (
    tipo: TipoNotificacao,
    titulo: string,
    texto: string
  ): void => {
    store.commit(NOTIFICAR, {
      titulo,
      texto,
      tipo,
    });
  };

  return {
    notificar,
  };
};
