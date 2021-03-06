package web

import (
	"net/http"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

// Router sets up the HTTP Router
func Router() *mux.Router {
	r := mux.NewRouter()
	r.StrictSlash(true)
	return r
}

// BuildHTTPHandler puts together our HTTPHandler
func BuildHTTPHandler(r *mux.Router) http.Handler {
	recovery := negroni.NewRecovery()
	recovery.PrintStack = false
	n := negroni.New(recovery)
	n.Use(cors.New(
		cors.Options{
			AllowedOrigins: []string{"*"},
		},
	))
	n.UseHandler(r)
	return n
}

// SessionRoute sets up the main session route
func SessionRoute(r *mux.Router, sessionHandler SessionHandler) {
	r.HandleFunc("/session", sessionHandler.ID).Methods("GET")
	r.HandleFunc("/session/{id}", sessionHandler.Session)
	r.HandleFunc("/sessions/count", sessionHandler.Active).Methods("GET")
}
