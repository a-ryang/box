# Monitoring Spring Boot Applications With Prometheus and Grafana

- Docker 설치
- 스프링부트 서버 실행
- 프로젝트 root 경로에서 도커 컴포즈로 컨테이너 실행

```shell
docker-compose up -d
```

- http://localnost:8080/api/test Springboot Test API
- http://localhost:3000/ Grafana
- http://localhost:9090/ Prometheus

```shell
# 볼륨 제거
docker-compose down --volumes
```
