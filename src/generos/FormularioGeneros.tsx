import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from 'yup';
import { AnyObject } from "yup/lib/object";
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps){
    return(
        <Formik initialValues={props.modelo}
        onSubmit={props.onSubmit}

          validationSchema={Yup.object({
              nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
          })}
        >

           {(formikProps) =>(
             <Form>
             <FormGroupText campo="nombre" label="Nombre" />

             <Button disabled={formikProps.isSubmitting} 
             type="submit">Salvar</Button>
             <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
         </Form>
           )}
           

        </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(values: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}