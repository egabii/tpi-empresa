from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Propietario(BaseModel):
  tipo: str
  nombre_apellido: str

class Propiedad(BaseModel):
  propietario: Propietario
  ubicacion: str


""" Controlador Propiedad """

""" @app.get("/propiedades")
def read_all_propiedades():
  return [] 

@app.get("/propiedades/{propiedad_id}")
def read_all_propiedades():
  return []"""

@app.post("/propiedades/")
async def crear_propiedad(propiedad: Propiedad):
  return propiedad