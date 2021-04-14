# team-programming-game-shop
#### Requirements:
 - Docker
 - VirtualBox
 - Minikube
 
#### Running microservices locally:
```
minikube start --vm-driver=virtualbox --memory=3G --no-vtx-check
minikube -p minikube docker-env | Invoke-Expression                # Unix - eval $(minikube docker-env)
kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

mvn clean install

docker build -t game-shop/shopping-cart ./shopping-cart-service/.
docker build -t game-shop/product-catalog ./product-catalog-service/.
docker build -t game-shop/payment-management ./payment-management-service/.
docker build -t game-shop/order-management ./order-management-service/.
docker build -t game-shop/customers ./customers-service/.
docker build -t game-shop/authentication ./authentication-service/.

kubectl apply -f ./shopping-cart-service/k8s/deployment-local.yaml
kubectl apply -f ./product-catalog-service/k8s/deployment-local.yaml
kubectl apply -f ./payment-management-service/k8s/deployment-local.yaml
kubectl apply -f ./order-management-service/k8s/deployment-local.yaml
kubectl apply -f ./customers-service/k8s/deployment-local.yaml
kubectl apply -f ./authentication-service/k8s/deployment-local.yaml

minikube addons enable ingress
kubectl apply -f ./k8s/ingress.yaml

kubectl get ing # wait until you get address - that's your api gateway endpoint 
```
#### for Google Kubernetes Engine
**enable Container Registry to allow custom images**
```
kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

mvn clean install

docker build -t gcr.io/team-programming-game-shop/shopping-cart ./shopping-cart-service/.
docker build -t gcr.io/team-programming-game-shop/product-catalog ./product-catalog-service/.
docker build -t gcr.io/team-programming-game-shop/payment-management ./payment-management-service/.
docker build -t gcr.io/team-programming-game-shop/order-management ./order-management-service/.
docker build -t gcr.io/team-programming-game-shop/customers ./customers-service/.
docker build -t gcr.io/team-programming-game-shop/authentication ./authentication-service/.

docker push gcr.io/team-programming-game-shop/shopping-cart
docker push gcr.io/team-programming-game-shop/product-catalog
docker push gcr.io/team-programming-game-shop/payment-management
docker push gcr.io/team-programming-game-shop/order-management
docker push gcr.io/team-programming-game-shop/customers
docker push gcr.io/team-programming-game-shop/authentication

kubectl apply -f ./shopping-cart-service/k8s/deployment.yaml
kubectl apply -f ./product-catalog-service/k8s/deployment.yaml
kubectl apply -f ./payment-management-service/k8s/deployment.yaml
kubectl apply -f ./order-management-service/k8s/deployment.yaml
kubectl apply -f ./customers-service/k8s/deployment.yaml
kubectl apply -f ./authentication-service/k8s/deployment.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
kubectl apply -f ./k8s/ingress.yaml

kubectl get ing # wait until you get address - that's your api gateway endpoint 
```
#### Deploy an updated microservice (e.g. shopping-cart)
```
mvn clean install -pl shopping-cart-service -am
docker build -t game-shop/shopping-cart ./shopping-cart-service/.
kubectl delete deployment -l app=shopping-cart
kubectl apply -f ./shopping-cart-service/k8s/deployment.yaml
```
#### Remove whole stuff:
```
minikube delete
```
---
#### FAQ
1. Q: When I try to build docker image I get error stating that the docker daemon is not running.  
   A: We encountered that error when using Docker built in Kubernetes cluster. Disabling the Kubernetes in Docker may fix this issue

2. Q: I'm getting ErrImagePull or ImagePullBackOff on local deployment.  
   A: This error may occur when image is not accessible from local registry. Make sure to check the tag - images with URL-like tags eg. *gcr.io/image* may indicate remote resurce. Also check if ```docker images``` contains your image entry. One last thing to ckeck is the image name in **deployment.yaml** for the specific service

3. Q: Despite building the docker image and recreating deployment, the service is not updated.  
   A: Ensure you are building to right docker registry. Did you perform ```minikube -p minikube docker-env | Invoke-Expression```?
