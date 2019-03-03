import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import contactStyles from '../styles/contactStyles';
import * as emailjs from 'emailjs-com';
import contactIcon from '../images/008-global.svg';


class Contacto extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      errores: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      },
      open: false
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;

    this.setState({[name]:value})
  }

  validateForm()  {
    let errores = {}
    let formIsValid = true;

    if (this.state.nombre.length < 1) {
      errores.nombre = 'Debes completar tu nombre';
      formIsValid = false
    }

    if(!this.state.asunto || this.state.asunto.length < 1) {
      errores.asunto = 'Debes completar el asunto';
      formIsValid = false
    }
    if(!this.state.mensaje || this.state.mensaje.length < 1) {
      errores.mensaje = 'Debes completar el mensaje';
      formIsValid = false
    }

    const emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if(!this.state.email || this.state.email.length < 1) {
      errores.email = 'Debes completar tu mail';
      formIsValid = false
    } else {
      if(!emailValid) {
        errores.email = 'Por favor ingresa un mail válido'
        formIsValid = false
      }
    }

    this.setState({
      errores: errores
    })
    return formIsValid;
  }

  sentMessage = event => {
    event.preventDefault();

    if (!this.validateForm()){
      return
    }

    var template_params = {
      to_name: 'Alizanza Francesa de Vicente Lopez',
      from_name: this.state.nombre + ' (' + this.state.email + ')',
      from_subject: this.state.asunto,
      message_html: this.state.mensaje
    }

    var service_id = "default_service";
    var template_id = "template_dnWnZH49";
    emailjs.send(service_id,template_id,template_params, 'user_IkOabWfUwifUtEpFgfy1P');

    this.setState({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      open: true
    })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };


  render(){
  const {classes} = this.props;

  return(
    <section className={classes.sectionContainer}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={9} md={8} className={classes.formContainer}>
          <h2 className={classes.sectionTitle}>Contáctanos</h2>
          <img src={contactIcon} alt='Contacta a la Alianza Francesa de Vicente Lopez' className={classes.icono}/>
          <form>
            <TextField
              id="nombre"
              label="Nombre"
              placeholder="Nombre"
              className={classes.textField}
              variant="outlined"
              onChange={this.handleInputChange}
              required
              fullWidth
              name='nombre'
              error={false}
              value={this.state.nombre}
              helperText={this.state.errores.nombre}
              InputLabelProps={{
                FormLabelClasses: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              variant="outlined"
              onChange={this.handleInputChange}
              required
              fullWidth
              error={false}
              value={this.state.email}
              helperText={this.state.errores.email}
              InputLabelProps={{
                FormLabelClasses: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
              id="asunto"
              label="Asunto"
              placeholder="Asunto"
              className={classes.textField}
              variant="outlined"
              onChange={this.handleInputChange}
              required
              fullWidth
              name='asunto'
              error={false}
              value={this.state.asunto}
              helperText={this.state.errores.asunto}
              InputLabelProps={{
                FormLabelClasses: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
            <TextField
             id="mensaje"
             label="Mensaje"
             placeholder="Mensaje"
             multiline
             className={classes.textField}
             variant="outlined"
             onChange={this.handleInputChange}
             required
             name='mensaje'
             error={false}
             value={this.state.mensaje}
             fullWidth
             rows={6}
             helperText={this.state.errores.mensaje}
             InputLabelProps={{
               FormLabelClasses: {
                 root: classes.cssLabel,
                 focused: classes.cssFocused,
               },
             }}
             InputProps={{
               classes: {
                 root: classes.cssOutlinedInput,
                 focused: classes.cssFocused,
                 notchedOutline: classes.notchedOutline,
               },
             }}
           />
           <Button
             variant="extendedFab"
             aria-label="Enviar"
             className={classes.button}
             onClick={this.sentMessage}
            > Enviar </Button>
          </form>
          <Snackbar
              className={classes.mensajeContainer}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={6000}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span>Su mensaje se ha enviado con éxito.<br/> En breve nos pondremos en contacto.</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={this.handleClose}
                  >
                    <CloseIcon />
              </IconButton>,
            ]}
          />
        </Grid>
        <Hidden xsDown>
          <Grid item sm={3} md={4} className={classes.imageContainer}></Grid>
        </Hidden>
      </Grid>
    </section>
  )
  }
}

export default withStyles(contactStyles)(Contacto);
