## Website Performance Optimization portfolio project
This project is one of Udacity's Frontend Nanodegree projects. We use [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) to measure the performance of webpage.

## Project on production environment
You could visit [this link](http://zhenhangtung.github.io/frontend-nanodegree-mobile-portfolio/).

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


