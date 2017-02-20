## Website Performance Optimization portfolio project
This project is one of Udacity's Frontend Nanodegree projects. We use [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) to measure the performance of webpage. The original project files exist in src folder.

## Project on production environment
You could visit [this link](http://zhenhangtung.github.io/frontend-nanodegree-mobile-portfolio/).

## Project Optimization Outline
1. Added classes like ```content-li``` to DOM in ```index.html```, ```project-2048.html```, ```project-mobile.html``` and ```project-webperf.html```.
2. Changed some CSS name in ```css/style.css``` file.
3. Changed the CSS's ```href``` location and added ```__inline=true``` to ```<link>``` html files.
4. Added media query to html files.
5. Encoded an image in ```views/pizza.html``` into base46 file.
6. Changed some image file names in ```img``` tags in ```views/pizza.html```.
7. Add ```scrollHandler``` to ```views/js/main.js```.
8. Made some changes to function ```changePizzaSizes``` in ```views/js/main.js```.
9. Made some changes to function ```updatePositions``` in ```views/js/main.js```.

## How to use this project
1. Clone this project
2. Install ImageMagick

	```
	$> brew install ImageMagick
	```
	If you are using ubuntu, checkout this [post](https://www.enovate.co.uk/blog/2015/12/16/how-to-install-imagemagick-from-source-on-ubuntu-14.04) to install ImageMagick.

3. Run following code to install the environment

	```bash
	$> npm install
	$> grunt
	```

4. All production code will be located at ```dist```
5. Open ```dist/index.html```
6. Or you cold run this project on your local server


	* For those who use Python on the local machine

  ```bash
  $> python -m SimpleHTTPServer 8000
  ```

	* For those who use PHP on the local machine,

  ```bash
  $> php -S localhost:8000
  ```

7. Open a browser and visit localhost:8000

8. Also, you could download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8000
  ```


