# team-programming-game-shop
#### Requirements:
 - Docker
 - VirtualBox
 - Minikube
 
#### Running microservices locally:
```
minikube start --vm-driver=virtualbox --memory=3G --no-vtx-check
minikube -p minikube docker-env | Invoke-Expression
kubectl create clusterrolebinding admin --clusterrole=cluster-admin --serviceaccount=default:default

mvn clean install

docker build -t game-shop/shopping-cart ./shopping-cart-service/.
docker build -t game-shop/product-catalog ./product-catalog-service/.
docker build -t game-shop/payment-management ./payment-management-service/.
docker build -t game-shop/order-management ./order-management-service/.
docker build -t game-shop/customers ./customers-service/.
docker build -t game-shop/authentication ./authentication-service/.

kubectl apply -f .\shopping-cart-service\k8s\deployment.yaml
kubectl apply -f .\product-catalog-service\k8s\deployment.yaml
kubectl apply -f .\payment-management-service\k8s\deployment.yaml
kubectl apply -f .\order-management-service\k8s\deployment.yaml
kubectl apply -f .\customers-service\k8s\deployment.yaml
kubectl apply -f .\authentication-service\k8s\deployment.yaml

minikube addons enable ingress
kubectl apply -f .\k8s\ingress.yaml

kubectl get ing # wait until you get address - that's your api gateway endpoint 
```
#### Deploy an updated microservice (e.g. shopping-cart)
```
mvn clean install -pl shopping-cart-service -am
docker build -t game-shop/shopping-cart ./shopping-cart-service/.
kubectl delete deployment -l app=shopping-cart
kubectl apply -f .\shopping-cart-service\k8s\deployment.yaml
```
#### Remove whole stuff:
```
minikube delete
```
