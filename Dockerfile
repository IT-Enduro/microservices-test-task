FROM golang
WORKDIR /app
COPY . /app

RUN go build ./cmd/server

EXPOSE 8080

CMD ["/app/server"]
