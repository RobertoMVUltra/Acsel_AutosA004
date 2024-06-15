'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Consulta de Polizas")
Set jbtnCancelar = frameAcsel.JavaButton("tagname:=Cancelar")
Set jToolBar = javaMain.JavaToolbar("tagname:=ToolBar")

Set frameListaDePolizas = javaMain.JavaInternalFrame("tagname:=:: Lista de Polizas.*")
Set jtxtCliente = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=12")

Set frameBusquedaDeCliente = javaMain.JavaInternalFrame("tagname:=Busqueda de Cliente*")

Set jtxtLineaDeNegocio = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=16")
Set frameLineasDeNegocio = javaMain.JavaInternalFrame("tagname:=Lineas de Negocio")
Set jtxtBuscarLineaDeNegocio = frameLineasDeNegocio.JavaEdit("tagname:=Buscar")
Set jbtnBuscarLineaDeNegocio = frameLineasDeNegocio.JavaButton("tagname:=Buscar")
Set jcmbBuscarLineaDeNegocio = frameLineasDeNegocio.JavaList("tagname:=Buscar")
Set jbtnAceptarLineaDeNegocio = frameLineasDeNegocio.JavaButton("tagname:=Aceptar")

Set jtxtProducto = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=52")
Set frameListaDeProductos = javaMain.JavaInternalFrame("tagname:=LISTA DE PRODUCTOS")
Set jcmbBuscarListaDeProductos = frameListaDeProductos.JavaList("tagname:=Buscar")
Set jbtnAceptarListaDeProductos = frameListaDeProductos.JavaButton("tagname:=Aceptar")

Set jtxtTipoVigencia = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=53")
Set frameTipoDeVigencia = javaMain.JavaInternalFrame("tagname:=Tipo de Vigencia")
Set jcmbBuscarTipoDeVigencia = frameTipoDeVigencia.JavaList("tagname:=Buscar")
Set jbtnAceptarTipoDeVigencia = frameTipoDeVigencia.JavaButton("tagname:=Aceptar")

Set jtxtFrecuenciaFact = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=27")
Set frameFrecuenciaDeFacturacion = javaMain.JavaInternalFrame("tagname:=Frecuencia de Facturacion")
Set jcmbBuscarFrecuenciaDeFacturacion = frameFrecuenciaDeFacturacion.JavaList("tagname:=Buscar")
Set jbtnAceptarFrecuenciaDeFacturacion = frameFrecuenciaDeFacturacion.JavaButton("tagname:=Aceptar")

Set jtxtCuadernoDeBono = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=36")
Set frameCuadernosDeBonos = javaMain.JavaInternalFrame("tagname:=Cuadernos de Bonos")
Set jcmbBuscarCuadernosDeBonos = frameCuadernosDeBonos.JavaList("tagname:=Buscar")
Set jbtnAceptarCuadernosDeBonos = frameCuadernosDeBonos.JavaButton("tagname:=Aceptar")

Set jtxtTipoNegocio = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=40")
Set frameTiposDeNegocio = javaMain.JavaInternalFrame("tagname:=Tipos de Negocio")
Set jtxtBuscarTiposDeNegocio = frameTiposDeNegocio.JavaEdit("tagname:=Buscar")
Set jbtnBuscarTiposDeNegocio = frameTiposDeNegocio.JavaButton("tagname:=Buscar")
Set jcmbBuscarTiposDeNegocio = frameTiposDeNegocio.JavaList("tagname:=Buscar")
Set jbtnAceptarTiposDeNegocio = frameTiposDeNegocio.JavaButton("tagname:=Aceptar")

Set jtxtDiasLimitePago = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=11")
Set jtxtCodigoIntermediario = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:=49")
Set frameListaDeIntermediarios = javaMain.JavaInternalFrame("tagname:=Lista de Intermediarios")
Set jtxtBuscarListaDeIntermediarios = frameListaDeIntermediarios.JavaEdit("tagname:=Buscar")
Set jbtnBuscarListaDeIntermediarios = frameListaDeIntermediarios.JavaButton("tagname:=Buscar")
Set jcmbBuscarListaDeIntermediarios = frameListaDeIntermediarios.JavaList("tagname:=Buscar")
Set jbtnAceptarListaDeIntermediarios = frameListaDeIntermediarios.JavaButton("tagname:=Aceptar")

Set jtabTabs = frameListaDePolizas.JavaTab("tagname:=TabBar")
Set frameCertificados = javaMain.JavaInternalFrame("tagname:=:: Certificados Ver.*")
'jtxtTarifica.Highlight
'For Iterator = 0 To 63 Step 1
'	Set jtxtCliente = frameListaDePolizas.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtCliente.Highlight
'Next @@ hightlight id_;_23940558_;_script infofile_;_ZIP::ssf1.xml_;_
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strCliente = DataTable.Value("CLIENTE")
strLineaDeNegocioFiltro = DataTable.Value("LINEA_DE_NEGOCIO_FILTRO")
intLineaDeNegocio = CInt(DataTable.Value("LINEA_DE_NEGOCIO"))
strProducto = DataTable.Value("PRODUCTO")
strTipoDeVigencia = DataTable.Value("TIPO_DE_VIGENCIA")
strFrecuenciaDeFacturacion = DataTable.Value("FRECUENCIA_DE_FACTURACION")
strCuadernoDeBono = DataTable.Value("CUADERNO_DE_BONO")
strBuscarTipoDeNegocio = DataTable.Value("BUSCAR_TIPO_DE_NEGOCIO")
strTipoDeNegocio = DataTable.Value("TIPO_DE_NEGOCIO")
strBuscarListaDeIntermediarios = DataTable.Value("BUSCAR_LISTA_DE_INTERMEDIARIOS")
strListaDeIntermediario = DataTable.Value("LISTA_DE_INTERMEDIARIO")
strSubTab = "Certificados"
intTiempoEspera = Cint(10)
strParamTipoCliente = Parameter("TIPO_DE_CLIENTE")
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
rem cliente nuevo
rem If strParamTipoCliente = oCliente.CLIENTE_NUEVO Then
jbtnCancelar.Click
fnClickOnjToolBar oToolBar.CREAR_REGISTRO

jtxtCliente.Set strCliente
jtxtCliente.Type strTab

'fnValidateAnObjctExist frameBusquedaDeCliente, intTiempoEspera
	
rem continuacion cliente nuevo
'ElseIf strParamTipoCliente = oCliente.CLIENTE_EXISTENTE Then
	jtxtLineaDeNegocio.Type strCtrL
	jtxtBuscarLineaDeNegocio.Set strLineaDeNegocioFiltro
	jbtnBuscarLineaDeNegocio.Click
	jcmbBuscarLineaDeNegocio.Select intLineaDeNegocio
	jbtnAceptarLineaDeNegocio.Click
	jtxtProducto.Type strCtrL
	jcmbBuscarListaDeProductos.Select strProducto
	jbtnAceptarListaDeProductos.Click
	jtxtTipoVigencia.Type strCtrL
	jcmbBuscarTipoDeVigencia.Select strTipoDeVigencia
	jbtnAceptarTipoDeVigencia.Click
	jtxtFrecuenciaFact.Type strCtrL
	jcmbBuscarFrecuenciaDeFacturacion.Select strFrecuenciaDeFacturacion
	jbtnAceptarFrecuenciaDeFacturacion.Click
	jtxtCuadernoDeBono.Type strCtrL
	jcmbBuscarCuadernosDeBonos.Select strCuadernoDeBono
	jbtnAceptarCuadernosDeBonos.Click
	jtxtTipoNegocio.Type strCtrL
	jtxtBuscarTiposDeNegocio.Set strBuscarTipoDeNegocio
	jbtnBuscarTiposDeNegocio.Click
	jcmbBuscarTiposDeNegocio.Select strTipoDeNegocio
	jbtnAceptarTiposDeNegocio.Click
	wait 1
	jtxtDiasLimitePago.Type strTab
	wait 1
	fnClickOnjToolBar oToolBar.SALVAR
	jtxtCodigoIntermediario.Type strCtrL
	jtxtBuscarListaDeIntermediarios.Set strBuscarListaDeIntermediarios
	jbtnBuscarListaDeIntermediarios.Click
	jcmbBuscarListaDeIntermediarios.Select strListaDeIntermediario 'En lugar del nombre del intermediario se puede utilizar el index comenzando por el cero 0 
	jbtnAceptarListaDeIntermediarios.Click
	fnClickOnjToolBar oToolBar.SALVAR
	jtabTabs.Select strSubTab
	fnValidateAnObjctExist frameCertificados, intTiempoEspera
'End If


