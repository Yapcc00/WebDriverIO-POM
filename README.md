## Branch Principal

**El proyecto principal se encuentra en el branch `master`. Asegúrate de verificar este branch para obtener la versión más reciente del código.
¡Gracias por tu interés en este proyecto de automatización!**


# Proyecto de Automatización con WebDriverIO

**Este repositorio contiene un proyecto de automatización que utiliza WebDriverIO para interactuar con la página "automation practica" utilizando JavaScript como lenguaje principal. Las pruebas se ejecutan en los navegadores Chrome y Firefox.
**

## Recomendaciones
**Debes primero instalas todas las dependencias con ** - npm i - ** para no encontrar errores, En algunos casos de prueba, puede ser necesario cambiar la dirección de correo electrónico, ya que su uso repetido podría causar fallos en las pruebas. Además, se recomienda eliminar la carpeta allure-results antes de cada ejecución, ya que cada nueva ejecución guarda los informes anteriores, lo que podría generar confusión o redundancia en los resultados.**`

**Es importante seguir estos pasos para mantener la integridad y la precisión de las pruebas.**


## Configuración y Ejecución

**Para ejecutar las pruebas, utiliza el siguiente comando:**


```
npx wdio run wdio.conf.js
```
**Para ejecutar el reporte con allure:**

```
allure open
```

**Puedes encontrar la configuración del proyecto en el archivo `wdio.conf.js`. Además, en la sección `specs` adicciona ```  "./test/specs/**/*.js"``` para ejecutar las pruebas, puedes especificar si deseas ejecutar todas las pruebas o solo una específica.
Para habilitar la ejecución en paralelo, simplemente elimina los comentarios (`/* */`) correspondientes en el archivo de configuración, y las pruebas se ejecutarán en paralelo.**




```
cd existing_repo
git remote add origin https://gitlab.com/Yapcc00/puebatecnica.git
git branch -M main
git push -uf origin main
```
