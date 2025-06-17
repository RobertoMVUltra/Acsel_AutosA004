'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameSiniestros = javaMain.JavaInternalFrame("tagname:=.::  Siniestros  Generales.*")
Set jtxtCertificado=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=22")
Set jtxtProducto=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=27")
Set jtxtPoliza=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=28")
Set jtxtOficina=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=29")
Set jtxtCodigoOficinaRecep=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=36")
Set jToolBar = javaMain.JavaToolbar("tagname:=ToolBar")
Set frameOficinas = javaMain.JavaInternalFrame("tagname:=Oficinas para atención de.*")
Set jtxtBuscarOficinas=frameOficinas.JavaEdit("tagname:=Buscar")
Set jbtnBuscarOficinas=frameOficinas.JavaButton("tagname:=Buscar")
Set jcmbListaBucarOficinas=frameOficinas.JavaList("tagname:=Buscar")
Set jbtnAceptarOficinas=frameOficinas.JavaButton("tagname:=Aceptar")
Set jtxtCodiOficinaResponsable=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=38")
Set frameOficina = javaMain.JavaInternalFrame("tagname:=Oficin.*")
Set jtxtBuscarOficinasRespon=frameOficina.JavaEdit("tagname:=Buscar")
Set jbtnBuscarOficinasRespon=frameOficina.JavaButton("tagname:=Buscar")
Set jcmbListaBucarOficinasRespon=frameOficina.JavaList("tagname:=Buscar")
Set jbtnAceptarOficinasRespon=frameOficina.JavaButton("tagname:=Aceptar")
Set jtxtCausa=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=40")
Set frameCausaSiniestro = javaMain.JavaInternalFrame("tagname:=Causa del Siniestro.*")
Set jtxtBuscarCausaSiniestro=frameCausaSiniestro.JavaEdit("tagname:=Buscar")
Set jbtnBuscarCausaSiniestro=frameCausaSiniestro.JavaButton("tagname:=Buscar")
Set jcmbListaCausaSiniestro=frameCausaSiniestro.JavaList("tagname:=Buscar")
Set jbtnAceptarCausaSiniestro=frameCausaSiniestro.JavaButton("tagname:=Aceptar")
Set jtxtCodiGenrenciaResp=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=44")
Set frameGerenciaRespons = javaMain.JavaInternalFrame("tagname:=Gerencia Respons.*")
Set jtxtBuscarGerenciaRespons=frameGerenciaRespons.JavaEdit("tagname:=Buscar")
Set jbtnBuscarGerenciaRespons=frameGerenciaRespons.JavaButton("tagname:=Buscar")
Set jcmbListaGerenciaRespons=frameGerenciaRespons.JavaList("tagname:=Buscar")
Set jbtnAceptarGerenciaRespons=frameGerenciaRespons.JavaButton("tagname:=Aceptar")
Set jtxtSiniestro=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=47")
Set frameOficinaSiniestros = javaMain.JavaInternalFrame("tagname:=Oficinas para atención de sinies.*")
Set jtxtBuscarOficinaSiniestros=frameOficinaSiniestros.JavaEdit("tagname:=Buscar")
Set jbtnBuscarOficinaSiniestros=frameOficinaSiniestros.JavaButton("tagname:=Buscar")
Set jcmbListaOficinaSiniestros=frameOficinaSiniestros.JavaList("tagname:=Buscar")
Set jbtnAceptarOficinaSiniestros=frameOficinaSiniestros.JavaButton("tagname:=Aceptar")
Set jtxtCodigoSubRamo=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=8")
Set frameRamoCertificado = javaMain.JavaInternalFrame("tagname:=Lista de Ramos del Certific.*")
Set jtxtBuscarRamoCertificado=frameRamoCertificado.JavaEdit("tagname:=Buscar")
Set jbtnBuscarRamoCertificado=frameRamoCertificado.JavaButton("tagname:=Buscar")
Set jcmbListaRamoCertificado=frameRamoCertificado.JavaList("tagname:=Buscar")
Set jbtnAceptarRamoCertificado=frameRamoCertificado.JavaButton("tagname:=Aceptar")
Set jtxtAjustador=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=12")
Set jbtnReservas=frameSiniestros.JavaButton("tagname:=Reservas")
Set frameDetalleReserva = javaMain.JavaInternalFrame("tagname:=Detalle de Reserva por Cober.*")
Set jtxtCodCoberturaReserva=frameDetalleReserva.JavaEdit("tagname:=VTextField", "index:=2")
Set jradioPorcentajeSumaAsegurada=frameDetalleReserva.JavaRadioButton("tagname:=50%")
Set frameCoberturaCertificado = javaMain.JavaInternalFrame("tagname:=Cobertura del Certificado")
Set jtxtBuscarCoberturaCertificado=frameCoberturaCertificado.JavaEdit("tagname:=Buscar")
Set jbtnBuscarCoberturaCertificado=frameCoberturaCertificado.JavaButton("tagname:=Buscar")
Set jcmbListaCoberturaCertificado=frameCoberturaCertificado.JavaList("tagname:=Buscar")
Set jbtnAceptarCoberturaCertificado=frameCoberturaCertificado.JavaButton("tagname:=Aceptar")
Set frameReservaCertificado = javaMain.JavaInternalFrame("tagname:=Reserva del Certifica.*")
Set jbtnReservaCertificado=frameReservaCertificado.JavaButton("tagname:=VButton", "index:=0")
Set jtabTabsBarSiniestros = frameSiniestros.JavaTab("tagname:=TabBar")

Set jtxtAreaNuevaDescripcion=frameSiniestros.JavaEdit("tagname:=FLWTextArea", "index:=0")
Set jbtnSalvar=frameSiniestros.JavaButton("tagname:=Salvar")
Set jbtnActualizarSiniestro=frameSiniestros.JavaButton("tagname:=VButton", "index:=0")
Set jtxtSiniestro2=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=20")
Set jtxtSerie2=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=35")
Set jtxtOficina2=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=65")
Set jtxtPoliza2=frameSiniestros.JavaEdit("tagname:=VTextField", "index:=80")
Set objWindow=Window("Personal: Microsoft​ Edge")
Set jbtnDclinar=Window("Personal: Microsoft​ Edge").Dialog("Adobe Reader 8").Page("License Agreement").WebButton("Decline")
Set jbtnQuit=Window("Personal: Microsoft​ Edge").Dialog("Adobe Reader 8").Page("Decline License Agreement").WebButton("Quit")
Set jbtnExit=Window("Adobe Reader").Dialog("Adobe Reader").WinButton("Exit")



'jtxtBuscarGerenciaRespons.Highlight
'jtxtSiniestro.Highlight
'jtxtSerie.Highlight
'jtxtOficina.Highlight
'jtxtPoliza.Highlight
'jtxtPoliza2.Highlight
'For Iterator =65 To 150 Step 1
'	Set jtxtSiniestro=frameSiniestros.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtSiniestro.Highlight
'Next


'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strProducto = DataTable.value("CODIGO_PRODUCTO")
strPoliza = DataTable.value("POLIZA")
strCertificado=DataTable.value("CERTIFICADO")
strBucarOficina=DataTable.value("BUSCAR_FOCINAS")
strListaOficinas=Cint(DataTable.value("LISTA_OFICINA"))
strBucarOficinaRespon=DataTable.value("BUSCAR_OFICINA_RESPONS")
strListaOficinasRespon=DataTable.value("LISTA_OFICINA_RESPONS")
strBucarCausaSiniestro=DataTable.value("BUSCAR_CAUSAR_SINIESTRO")
strListaCausaSiniestro=Cint(DataTable.value("LISTA_CAUSA_SINIESTRO"))
strBucarGerenciaResponsable=DataTable.value("BUSCAR_GERENCIA_RESPONSABLE")
strListaGerenciaResponsable=Cint(DataTable.value("LISTA_GERENCIA_RESPONSABLE"))
strBucarOficinaSiniestro=DataTable.value("BUSCAR_OFICINA_SINIESTRO")
strListaOficinaSiniestro=Cint(DataTable.value("LISTA_OFICINA_SINIESTRO"))
strBucarRamoCertificado=DataTable.value("BUSCAR_RAMO_CERTIFICADO")
strListaRamoCertificado=Cint(DataTable.value("LISTA_RAMO_CERTIFICADO"))
strBucarCoberturaCertificado=DataTable.value("BUSCAR_COBERTURA_CERTIFICADO")
strListaCoberturaCertificado=Cint(DataTable.value("LISTA_COBERTURA_CERTIFICADO"))
strDescripcionSiniestro=DataTable.value("DESCRIPCION_SINIESTRO")
strTabBarDescripcion="Descripción"
strTabBarSiniestros="Siniestros"
intTiempoObjetoExiste = 15

'''''''''''''''''''''''''''''''Definición de nombres y criticidad de objetos'''''''''''''''''''''''''''''''''''''''''''''''
'jtxtUsuario.SetTOProperty "criticidad", "Alto"
'jtxtUsuario.SetTOProperty "ObjName", "Usuario"
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''

fnClickOnjToolBar oToolBar.CREAR_REGISTRO
jtxtProducto.Set strProducto
jtxtPoliza.Set strPoliza
jtxtPoliza.Type micTab
jtxtCertificado.Set strCertificado

jtxtCodigoOficinaRecep.Type strCtrL
jtxtBuscarOficinas.Set strBucarOficina
jbtnBuscarOficinas.Click
jcmbListaBucarOficinas.Select strListaOficinas
jbtnAceptarOficinas.Click

jtxtCausa.Type strCtrL
jtxtBuscarCausaSiniestro.Set strBucarCausaSiniestro
jbtnBuscarCausaSiniestro.Click
jcmbListaCausaSiniestro.Select strListaCausaSiniestro
jbtnAceptarCausaSiniestro.Click
jtxtCodiGenrenciaResp.Type strCtrL
jtxtBuscarGerenciaRespons.Set strBucarGerenciaResponsable
jbtnBuscarGerenciaRespons.Click
jcmbListaGerenciaRespons.Select strListaGerenciaResponsable
jbtnAceptarGerenciaRespons.Click
jtxtSiniestro.Type strCtrL
jtxtBuscarOficinaSiniestros.Set strBucarOficinaSiniestro
jbtnBuscarOficinaSiniestros.Click
jcmbListaOficinaSiniestros.Select strListaOficinaSiniestro
jbtnAceptarOficinaSiniestros.Click
fnClickOnjToolBar oToolBar.SALVAR
jtxtCodigoSubRamo.Type strCtrL

jtxtBuscarRamoCertificado.Set strBucarRamoCertificado
jbtnBuscarRamoCertificado.Click
jcmbListaRamoCertificado.Select strListaRamoCertificado	
jbtnAceptarRamoCertificado.Click
jtxtAjustador.Type micTab

'Capturar pantalla de consulta poliza Siniestro
fnValidateAnObjctExist jbtnReservas, intTiempoObjetoExiste

jbtnReservas.Click
fnClickOnjToolBar oToolBar.CREAR_REGISTRO
jtxtCodCoberturaReserva.Type strCtrL

jtxtBuscarCoberturaCertificado.Set strBucarCoberturaCertificado
jbtnBuscarCoberturaCertificado.Click
jcmbListaCoberturaCertificado.Select strListaCoberturaCertificado
jbtnAceptarCoberturaCertificado.Click
jradioPorcentajeSumaAsegurada.Highlight
jradioPorcentajeSumaAsegurada.Click 1,1,"LEFT"

fnClickOnjToolBar oToolBar.SALVAR
fnClickOnjToolBar oToolBar.SALIR

'Capturar pantalla de consulta poliza Siniestro
fnValidateAnObjctExist jbtnReservaCertificado, intTiempoObjetoExiste

jbtnReservaCertificado.Click
fnClickOnjToolBar oToolBar.SALIR

'Capturar pantalla de consulta poliza Siniestro
fnValidateAnObjctExist jtabTabsBarSiniestros, intTiempoObjetoExiste

jtabTabsBarSiniestros.Select strTabBarDescripcion

jtxtAreaNuevaDescripcion.Set strDescripcionSiniestro
jbtnSalvar.Click
jtabTabsBarSiniestros.Select strTabBarSiniestros


strSiniestro=jtxtSiniestro2.GetROProperty("text")
strSerie=jtxtSerie2.GetROProperty("text")
strOficina=jtxtOficina2.GetROProperty("text")
strPoliza=jtxtPoliza2.GetROProperty("text")
fnAgregarDatosSiniestros strSiniestro, strSerie, strOficina,strPoliza
fnValidateAnObjctExist jbtnActualizarSiniestro, intTiempoObjetoExiste
jbtnActualizarSiniestro.Click

jbtnDclinar.Click
jbtnQuit.Click
jbtnExit.Click
objWindow.Close
'objBrowserAcsel.CloseAllTabs
