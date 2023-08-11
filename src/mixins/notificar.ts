import { TipoNotificacao } from "@/interfaces/INotificacoes";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipoMutacoes";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, titulo: string, texto: string) : void {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo,
      });
    },
  },
};

