# meanapp
Pruebas con el MEAN Stack
<h3>Configuración del Entorno de Desarrollo</h3>
1.- Se instalan las dependencias.

	$ sudo aptitude install node nodejs mongodb npm ruby ruby-dev
	Nota: Si el repo no posee el paquete de node mas actual, se debe descargar el source de la pagina oficial para instalarlo manualmente, para esto se deben tener instalados los paquetes necesarios:
		$ sudo apt-get install build-essential openssl libssl-dev pkg-config
		$ ./configure
		$ make
		$ make test
		$ make install

2.- Se instalan las dependencias desde el administrador de paquetes de node (npm).

	$ sudo npm install -g grunt-cli
	$ sudo npm install -g bower
	$ sudo npm install -g mongoose-unique-validator
	$ sudo npm install -g compass
	$ sudo npm install -g jshint

	Nota: El paquete compass (Necesario para el servidor grunt) puede ser instalado mediante el instalador de ruby, una vez actualizado:
		$ sudo gem install rubygems-update
		$ sudo update_rubygems
		$ sudo gem install compass

3.- Configuración del servidor (server).

	3.1.- Se crea la carpeta server dentro del proyecto.
	
		$ cd ~/workspace/meanapp  (Nota: El directorio es indiferente ya que node crea el servidor en localhost en un puerto determinado.)
		$ mkdir server
		
	3.2.- Se instalan los paquetes necesarios para la ejecución del servidor. Nota: se agregan segun la necesidad, existen muchos más.
	
		$ npm install --save express
		$ npm install --save mongoose
		$ npm install --save resourcejs
		$ npm install --save method-override
		$ npm install --save body-parser
		$ npm install --save lodash
		$ npm install --save node-restful

4.- Capa del Cliente.

	4.1- Instalación de yeoman.
	
	Una vez creada la carpeta cliente, se ingresa en ella y se ejecuta:
		$ npm install -g yo

	Nota: si muestran errores con el bloqueo de librerias para las dependencias.
		$ sudo chown -R $USER ~/.npm
		$ sudo chown -R $USER /usr/local/lib/node_modules
		$ mkdir clientAppFolder
		$ cd clientAppFolder
		$ npm install yo bower grunt-cli gulp generator-webapp generator-angular --save-dev
		$ yo angular
