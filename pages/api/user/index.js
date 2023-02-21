import nc from 'next-connect';
import { getAllUser,saveUser } from '../../../controller/user/user';

const handler =nc();
handler.get(getAllUser);
handler.post(saveUser);


export default handler;