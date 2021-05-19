# team-programming-game-shop
#### Requirements:
 - Docker
 - VirtualBox
 - Minikube
---
#### Development DB credentials set up
In order to connect to the databases, credentials should be passed as arguments during docker image build process.  
Environment variables, terminal session variables, or other means of storing such data may be used.

If using other means than terminal session variables, adjust *docker build ...* instructions accordingly

example **env_setup_secret.txt** file: (remove '$' sign if using Unix system)
```
$DB_URL_CUSTOMERS="jdbc:postgresql://aaa.bbb.cccsql.com:1111/aaa"
$DB_USERNAME_CUSTOMERS="aaa"
$DB_PASSWORD_CUSTOMERS="aaa"

$DB_URL_ORDER_MANAGEMENT="jdbc:postgresql://aaa.bbb.cccsql.com:1111/bbb"
$DB_USERNAME_ORDER_MANAGEMENT="bbb"
$DB_PASSWORD_ORDER_MANAGEMENT="bbb"

$DB_URL_PAYMENT_MANAGEMENT="jdbc:postgresql://aaa.bbb.cccsql.com:1111/ccc"
$DB_USERNAME_PAYMENT_MANAGEMENT="ccc"
$DB_PASSWORD_PAYMENT_MANAGEMENT="ccc"

$DB_URL_PRODUCT_CATALOG="jdbc:postgresql://aaa.bbb.cccsql.com:1111/ddd"
$DB_USERNAME_PRODUCT_CATALOG="ddd"
$DB_PASSWORD_PRODUCT_CATALOG="ddd"

$DB_URL_SHOPPING_CART="jdbc:postgresql://aaa.bbb.cccsql.com:1111/eee"
$DB_USERNAME_SHOPPING_CART="eee"
$DB_PASSWORD_SHOPPING_CART="eee"
```
To load credentials into shell variables execute all above lines or "run" the file with:

**Windows:**
```
Invoke-Expression(get-content .\env_setup_secret.txt -Raw)
```
**Unix:**
```
bash ./env_setup_secret.txt
```
---
#### Running microservices locally:
```
minikube start --vm-driver=virtualbox --memory=3G --no-vtx-check
minikube -p minikube docker-env | Invoke-Expression
# For Unix:
# eval $(minikube docker-env)
kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

mvn clean install

docker build -t "game-shop/shopping-cart" `
--build-arg DB_URL="$DB_URL_SHOPPING_CART" `
--build-arg DB_USERNAME="$DB_USERNAME_SHOPPING_CART" `
--build-arg DB_PASSWORD="$DB_PASSWORD_SHOPPING_CART" ./shopping-cart-service/.
docker build -t "game-shop/product-catalog" `
--build-arg DB_URL="$DB_URL_PRODUCT_CATALOG" `
--build-arg DB_USERNAME="$DB_USERNAME_PRODUCT_CATALOG" `
--build-arg DB_PASSWORD="$DB_PASSWORD_PRODUCT_CATALOG" ./product-catalog-service/.
docker build -t "game-shop/payment-management" `
--build-arg DB_URL="$DB_URL_PAYMENT_MANAGEMENT" `
--build-arg DB_USERNAME="$DB_USERNAME_PAYMENT_MANAGEMENT" `
--build-arg DB_PASSWORD="$DB_PASSWORD_PAYMENT_MANAGEMENT" ./payment-management-service/.
docker build -t "game-shop/order-management" `
--build-arg DB_URL="$DB_URL_ORDER_MANAGEMENT" `
--build-arg DB_USERNAME="$DB_USERNAME_ORDER_MANAGEMENT" `
--build-arg DB_PASSWORD="$DB_PASSWORD_ORDER_MANAGEMENT" ./order-management-service/order-management-server/.
docker build -t "game-shop/customers" `
--build-arg DB_URL="$DB_URL_CUSTOMERS" `
--build-arg DB_USERNAME="$DB_USERNAME_CUSTOMERS" `
--build-arg DB_PASSWORD="$DB_PASSWORD_CUSTOMERS" ./customers-service/customers-server/.
docker build -t game-shop/authentication ./authentication-service/authentication-server/.

kubectl apply -f ./shopping-cart-service/k8s/deployment-local.yaml
kubectl apply -f ./product-catalog-service/k8s/deployment-local.yaml
kubectl apply -f ./payment-management-service/k8s/deployment-local.yaml
kubectl apply -f ./order-management-service/order-management-server/k8s/deployment-local.yaml
kubectl apply -f ./customers-service/customers-server/k8s/deployment-local.yaml
kubectl apply -f ./authentication-service/authentication-server/k8s/deployment-local.yaml

minikube addons enable ingress
kubectl apply -f ./k8s/ingress.yaml

kubectl get ing # wait until you get address - that's your api gateway endpoint 
```
---
#### for Google Kubernetes Engine
**enable Container Registry to allow custom images**
```
kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

mvn clean install

docker build -t gcr.io/team-programming-game-shop/shopping-cart ./shopping-cart-service/.
docker build -t gcr.io/team-programming-game-shop/product-catalog ./product-catalog-service/.
docker build -t gcr.io/team-programming-game-shop/payment-management ./payment-management-service/.
docker build -t gcr.io/team-programming-game-shop/order-management ./order-management-service/order-management-server/.
docker build -t gcr.io/team-programming-game-shop/customers ./customers-service/customers-server/.
docker build -t gcr.io/team-programming-game-shop/authentication ./authentication-service/authentication-server/.

docker push gcr.io/team-programming-game-shop/shopping-cart
docker push gcr.io/team-programming-game-shop/product-catalog
docker push gcr.io/team-programming-game-shop/payment-management
docker push gcr.io/team-programming-game-shop/order-management
docker push gcr.io/team-programming-game-shop/customers
docker push gcr.io/team-programming-game-shop/authentication

kubectl apply -f ./shopping-cart-service/k8s/deployment.yaml
kubectl apply -f ./product-catalog-service/k8s/deployment.yaml
kubectl apply -f ./payment-management-service/k8s/deployment.yaml
kubectl apply -f ./order-management-service/order-management-server/k8s/deployment.yaml
kubectl apply -f ./customers-service/customers-server/k8s/deployment.yaml
kubectl apply -f ./authentication-service/authentication-server/k8s/deployment.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f ./k8s/ingress.yaml

kubectl get ing # wait until you get address - that's your api gateway endpoint 
```
---
#### Deploy an updated microservice (e.g. shopping-cart)
```
mvn clean install -pl shopping-cart-service -am
docker build -t "game-shop/shopping-cart" `
--build-arg DB_URL="$DB_URL_SHOPPING_CART" `
--build-arg DB_USERNAME="$DB_USERNAME_SHOPPING_CART" `
--build-arg DB_PASSWORD="$DB_PASSWORD_SHOPPING_CART" ./shopping-cart-service/.
kubectl delete deployment -l app=shopping-cart
kubectl apply -f ./shopping-cart-service/k8s/deployment.yaml
# for local deployment:
# kubectl apply -f ./shopping-cart-service/k8s/deployment-local.yaml
```
---
#### Remove whole stuff:
```
minikube delete
```
---
#### FAQ
1. Q: When I try to build docker image I get error stating that the docker daemon is not running.  
   A: Make sure the Docker is running.  
      ~~We encountered that error when using Docker built in Kubernetes cluster. Disabling the Kubernetes in Docker may fix this issue~~

2. Q: I'm getting ErrImagePull or ImagePullBackOff on local deployment.  
   A: This error may occur when image is not accessible from local registry. Make sure to check the tag - images with URL-like tags eg. *gcr.io/image* may indicate remote resurce. Also check if ```docker images``` contains your image entry. One last thing to ckeck is the image name in **deployment.yaml** for the specific service

3. Q: Despite building the docker image and recreating deployment, the service is not updated.  
   A: Ensure you are building to right docker registry. Did you perform ```minikube -p minikube docker-env | Invoke-Expression```? This has to be executed each time the shell is closed

4. Q: Services are not running due to DB connection error.  
   A: Ensure you passed the connection details correctly. Did you set up env_setup_secret.txt file and perforem ```get-content .\env_setup_secret.txt | Invoke-Expression```? This has to be executed each time the shell is closed
