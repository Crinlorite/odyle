// Último corte de los servidores europeos, para la franja de la portada.
// Se cambia a mano con cada aviso oficial (Steam o tablón de NCSOFT) y se añade
// la misma fila a la tabla de «Servidores» del apunte de la temporada 1.
export const ULTIMO_CORTE = {
  fecha: new Date('2026-10-08'),
  texto: {
    es: 'caída del servicio en la nube que usa NCSOFT en los 22 servidores europeos, de los dos bandos. A las 15:07 ya se podía entrar, sin aviso oficial de vuelta.',
    en: 'outage of the cloud service NCSOFT uses, on all 22 European servers of both factions. By 15:07 (Spanish time) you could log in again, with no official notice.',
    ko: 'NCSOFT가 사용하는 클라우드 서비스 장애로 유럽 22개 서버(양 진영) 전체에 접속 불가. 스페인 시간 15:07에는 다시 접속할 수 있었으나, 복구 공지는 없었습니다.',
  },
  aviso: 'https://steamcommunity.com/games/3393110/announcements/detail/712288859283522475',
};
