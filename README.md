# Kubernetes Workshop example

[slides](https://docs.google.com/presentation/d/1ao-JSEWWR_P55m6bIuT5OCiWSF5c4S0XW2a5DmrlinI/edit)

## Build & execute

Go to the target folder:

```bash
cd ~/hnc/kubernetes-workshop
```

To build the image

```shell
docker build -t kubernetes-workshop:latest .
```

To run the container

```shell
docker run -d -p 3000:3000 kubernetes-workshop
```

## Upload to Docker Hub

First we have to login:

```shell
docker login
```

Then we can tag the image and push it

```shell
IMAGE_ID=$(docker images | grep kubernetes-workshop | awk '{print $3}')
docker tag $IMAGE_ID amatiasq2/kubernetes-workshop
docker push amatiasq2/kubernetes-workshop
```

## Run in kubernetes

Create deployment and service

```shell
kubectl create deployment kubernetes-workshop --image=amatiasq2/kubernetes-workshop
kubectl expose deployment kubernetes-workshop --type=LoadBalancer --port=3000
```

Start VMs

```shell
minikube service kubernetes-workshop
```

### Stop it

```shell
kubectl delete deployment kubernetes-workshop
kubectl delete service kubernetes-workshop
```

```shell
minikube dashboard
```

# Commands

```shell
cd ~/hnc/kubernetes-workshop

docker build -t kubernetes-workshop:latest .

docker run -d -p 3000:3000 kubernetes-workshop

docker stop $CONTAINER_ID

docker tag kubernetes-workshop amatiasq2/kubernetes-workshop

docker push amatiasq2/kubernetes-workshop

kubectl create deployment kubernetes-workshop --image=amatiasq2/kubernetes-workshop

kubectl expose deployment kubernetes-workshop --type=LoadBalancer --port=3000

minikube service kubernetes-workshop

kubectl delete deployment kubernetes-workshop
kubectl delete service kubernetes-workshop

minikube dashboard
```

## Cleanup

```shell
docker ps -a | grep hello-world | awk '{print $1}' | xargs docker rm
docker rmi hello-world

CONTAINERS=$(docker ps -a | grep kubernetes-workshop | awk '{print $1}')
echo $CONTAINERS | xargs docker stop
echo $CONTAINERS | xargs docker rm

docker rmi amatiasq2/kubernetes-workshop kubernetes-workshop

kubectl delete deployment kubernetes-workshop
kubectl delete service kubernetes-workshop
```
