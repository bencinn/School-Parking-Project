const axiomtoken = import.meta.env.VITE_AXIOM_TOKEN || "";
const axiomorgid = import.meta.env.VITE_AXIOM_ORG_ID || "";

import { Axiom } from "@axiomhq/js";

const axiom = new Axiom({
  token: axiomtoken,
  orgId: axiomorgid
});
export async function AxiomIn({error,  whereis, parker_name, parker_surname, parker_handler, position, phone_number, type }: { whereis: number, parker_name?: string, parker_surname?: string, parker_handler?: string, position?: string, phone_number: string, type: string, error: boolean }) {
  axiom.ingest('school-parking-project', [{
    parknumber: whereis,
    parker_name,
    parker_surname,
    parker_handler,
    position,
    phone_number,
    status: type,
    error,
  }]);
  return null;
}
