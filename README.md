# How to run
```
kubectl apply -f k8s/
```

* open browser http://localhost

# How to stop
```
kubectl delete -f k8s/
```

<br/><br/>

# How to build
```
npm run build-add-header
npm run build-node
npm run push-add-header
npm run push-node
```

<br/><br/>

# References
* [ingress-nginx user guide](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#external-authentication)
* [Authenticate requests to apps on kubernetes using Nginx-Ingress and an AuthService.](https://medium.com/@ankit.wal/authenticate-requests-to-apps-on-kubernetes-using-nginx-ingress-and-an-authservice-37bf189670ee)
![image](https://user-images.githubusercontent.com/5511042/150347323-d22cdbc1-dda2-4d78-b732-dcd19d0905d8.png)
