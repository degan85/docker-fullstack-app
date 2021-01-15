### 1. Dockerfile 
    
- 개발환경
    - Dockerfile.dev
- 운영환경
    - Dockerfile

### 2. Docker-compose 
    
- version
- services
    - frontend
    - backend
    - nginx
    - mysql

### 3. Github Push 
    
- Feature Branch
- Master Branch

### 4. Travis CI 
    
- 테스트 소스 실행
- 테스트 성공
- 각각의 Dockerfile을 이용해서 Image 생성(빌드)
- 이미지 생성 후 Docker Hub로 전달

### 5. Docker Hub
- Travis CI에서 빌드된 이미지를 보관
- AWS Elastic Beanstalk에서 가져가려고 할때 전달

### 6. AWS ElasticBeanStalk
- Travis CI에서 빌드된 이미지를 이용해서 배포


## Nginx의 Proxy를 이용한 설계


- Client ->
- Nginx(Proxy) ->
- server
    - Frontend(Nginx(Serving) -> JS,HTML,CSS)
    - Server(Backend)+Mysql


