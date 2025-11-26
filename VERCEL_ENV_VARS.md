# Variables de Entorno para Vercel

Cuando configures tu proyecto en Vercel, agrega estas variables de entorno:

## Variables Requeridas

### MONGODB_URI
```
mongodb+srv://huertas20971_db_user:udH2ZEHSnCcfbP0r@cluster0.31hmu9j.mongodb.net/stock-tracker?retryWrites=true&w=majority&appName=Cluster0
```

### BETTER_AUTH_SECRET
```
a30b64f907b7048d1ebe02b2585ecd14a1a08e43804463258695c6f42489afe3
```

### BETTER_AUTH_URL
```
https://tu-app-nombre.vercel.app
```
**IMPORTANTE**: Después del primer deploy, Vercel te dará una URL. Reemplaza este valor con esa URL y redeploy.

---

## Pasos para Configurar en Vercel

1. Ve a https://vercel.com
2. Importa el repositorio: `Alejandro2097/Stock-app`
3. Antes de hacer deploy, click en "Environment Variables"
4. Agrega cada variable (una por una):
   - Name: `MONGODB_URI`
   - Value: (copia el valor de arriba)
   - Click "Add"
5. Repite para `BETTER_AUTH_SECRET` y `BETTER_AUTH_URL`
6. Click en "Deploy"

## Después del Primer Deploy

1. Vercel te dará una URL como: `https://stock-app-xxxxx.vercel.app`
2. Ve a Settings → Environment Variables
3. Edita `BETTER_AUTH_URL` y pon la URL real de tu app
4. Haz un nuevo deploy (Deployments → ... → Redeploy)

---

⚠️ **IMPORTANTE**: Borra este archivo después de configurar Vercel para no exponer tus credenciales.
