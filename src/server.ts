import { app } from './app';
import env from './infra/env';

app.listen(env.port, () => console.log(`🚀 Server started at port ${env.port}`));
