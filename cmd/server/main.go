package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.ListenAndServe(":8080", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(fmt.Sprintf("Hello, %s", os.Getenv("GREETING_NAME"))))
	}))
}
