'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameCertificados = javaMain.JavaInternalFrame("tagname:=:: Certificados Ver.*")

Set frameDatosParticularesDelVehiculo = javaMain.JavaInternalFrame("tagname:=::: Datos Particulares del Vehiculo.*")
Set jtxtTipoVehiculo = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=7")
Set frameListaTipoModelos = javaMain.JavaInternalFrame("tagname:=Lista Tipo Modelos")
'Set jtxtBuscarListaDeRamos = frameListaTipoModelos.JavaEdit("tagname:=Buscar")
'Set jbtnBuscarListaDeRamos = frameListaTipoModelos.JavaButton("tagname:=Buscar")
Set jcmbBuscarListaTipoModelos = frameListaTipoModelos.JavaList("tagname:=Buscar")
Set jbtnAceptarListaTipoModelos = frameListaTipoModelos.JavaButton("tagname:=Aceptar")

Set jtxtAutoservicio = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=8")

Set jtxtPlaca = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=12")
Set frameAutoServicios = javaMain.JavaInternalFrame("tagname:=Auto Servicios")
'Set jtxtBuscarListaDeRamos = frameAutoServicios.JavaEdit("tagname:=Buscar")
'Set jbtnBuscarListaDeRamos = frameAutoServicios.JavaButton("tagname:=Buscar")
Set jcmbBuscarAutoServicios = frameAutoServicios.JavaList("tagname:=Buscar")
Set jbtnAceptarAutoServicios = frameAutoServicios.JavaButton("tagname:=Aceptar")

Set jtxtAnioDelVehiculo = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=13")
Set jtxtModelo = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=0")

Set frameConsulta = javaMain.JavaInternalFrame("tagname:=Consulta")
Set jtxtMarca = frameConsulta.JavaEdit("tagname:=VTextField", "index:=0")
Set frameListaDeMarcas = javaMain.JavaInternalFrame("tagname:=Lista de Marcas")
Set jtxtBuscarListaDeMarcas = frameListaDeMarcas.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeMarcas = frameListaDeMarcas.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeMarcas = frameListaDeMarcas.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeMarcas = frameListaDeMarcas.JavaButton("tagname:=Aceptar")

Set jtxtModelo2 = frameConsulta.JavaEdit("tagname:=VTextField", "index:=1")
Set frameListaDeModelos = javaMain.JavaInternalFrame("tagname:=Modelos")
Set jtxtBuscarListaDeModelos = frameListaDeModelos.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeModelos = frameListaDeModelos.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeModelos = frameListaDeModelos.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeModelos = frameListaDeModelos.JavaButton("tagname:=Aceptar")

Set jtxtTipoDeVehiculo = frameConsulta.JavaEdit("tagname:=VTextField", "index:=5")
Set frameListaDeTiposDeVehiculos = javaMain.JavaInternalFrame("tagname:=Lista de Tipos de Vehiculos")
Set jtxtBuscarListaDeTiposDeVehiculos = frameListaDeTiposDeVehiculos.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeTiposDeVehiculos = frameListaDeTiposDeVehiculos.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeTiposDeVehiculos = frameListaDeTiposDeVehiculos.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeTiposDeVehiculos = frameListaDeTiposDeVehiculos.JavaButton("tagname:=Aceptar")

Set jtxtSbg = frameConsulta.JavaEdit("tagname:=VTextField", "index:=6")
Set frameListaDeTipos = javaMain.JavaInternalFrame("tagname:=Tipos")
Set jtxtBuscarListaDeTipos = frameListaDeTipos.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeTipos = frameListaDeTipos.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeTipos = frameListaDeTipos.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeTipos = frameListaDeTipos.JavaButton("tagname:=Aceptar")
Set jbtnConsultar = frameConsulta.JavaButton("tagname:=Consultar")

Set frameModeloVersion = javaMain.JavaInternalFrame("tagname:=Modelo / Versión.*")
Set jbtnSeleccion = frameModeloVersion.JavaButton("tagname:=Selección")

Set jcmbUsado = frameDatosParticularesDelVehiculo.JavaList("tagname:=VPopList", "index:=0")
Set jcmbTipoValor = frameDatosParticularesDelVehiculo.JavaList("tagname:=VPopList", "index:=1")

Set jtxtUso = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=46")
Set frameUsoDelVehiculo = javaMain.JavaInternalFrame("tagname:=Uso del Vehiculo")
Set jtxtBuscarUsoDelVehiculo = frameUsoDelVehiculo.JavaEdit("tagname:=Buscar")
Set jcmbBuscarUsoDelVehiculo = frameUsoDelVehiculo.JavaList("tagname:=Buscar")
Set jbtnBuscarUsoDelVehiculo = frameUsoDelVehiculo.JavaButton("tagname:=Buscar")
Set jbtnAceptarUsoDelVehiculo = frameUsoDelVehiculo.JavaButton("tagname:=Aceptar")

Set jtxtTipoRemolque = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=48")
Set frameTiposDeRemolque = javaMain.JavaInternalFrame("tagname:=Tipos de Remolque")
Set jtxtBuscarTiposDeRemolque = frameTiposDeRemolque.JavaEdit("tagname:=Buscar")
Set jcmbBuscarTiposDeRemolque = frameTiposDeRemolque.JavaList("tagname:=Buscar")
Set jbtnBuscarTiposDeRemolque = frameTiposDeRemolque.JavaButton("tagname:=Buscar")
Set jbtnAceptarTiposDeRemolque = frameTiposDeRemolque.JavaButton("tagname:=Aceptar")

Set jtxtEntrada = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=55")
Set framePuertasDeEntradaUSA = javaMain.JavaInternalFrame("tagname:=Puertas de Entrada a USA")
Set jtxtBuscarPuertasDeEntradaUsa = framePuertasDeEntradaUSA.JavaEdit("tagname:=Buscar")
Set jcmbBuscarPuertasDeEntradaUsa = framePuertasDeEntradaUSA.JavaList("tagname:=Buscar")
Set jbtnBuscarPuertasDeEntradaUsa = framePuertasDeEntradaUSA.JavaButton("tagname:=Buscar")
Set jbtnAceptarPuertasDeEntradaUsa = framePuertasDeEntradaUSA.JavaButton("tagname:=Aceptar")

Set jtxtColor = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=9")
Set frameListaDeColores = javaMain.JavaInternalFrame("tagname:=Lista de Colores")
Set jtxtBuscarListaDeColores = frameListaDeColores.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeColores = frameListaDeColores.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeColores = frameListaDeColores.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeColores = frameListaDeColores.JavaButton("tagname:=Aceptar")

Set jtxtNoMotor = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=1")
Set jtxtNoSerie = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=24")

Set frameAcselAlert = javaMain.JavaInternalFrame("tagname:=Acsel.*")
Set jbtnOkAlert = frameAcselAlert.JavaButton("tagname:=Ok")
Set jbtnSiAlert = frameAcselAlert.JavaButton("tagname:=Si")

Set jtxtTipoCarga = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=10")
Set jtxtFechaMod = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=29")

Set jtxtPaisPlaca = frameDatosParticularesDelVehiculo.JavaEdit("tagname:=VTextField", "index:=36")
Set frameListaPaisEstadoPlaca = javaMain.JavaInternalFrame("tagname:=PAIS, ESTADO DE PLACA")
Set jtxtBuscarListaPaisEstadoPlaca = frameListaPaisEstadoPlaca.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaPaisEstadoPlaca  = frameListaPaisEstadoPlaca.JavaList("tagname:=Buscar")
Set jbtnBuscarListaPaisEstadoPlaca  = frameListaPaisEstadoPlaca.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaPaisEstadoPlaca  = frameListaPaisEstadoPlaca.JavaButton("tagname:=Aceptar")

Set jbtnCoberturas = frameCertificados.JavaButton("tagname:=Coberturas")
Set jbtnDatosPartic = frameCertificados.JavaButton("tagname:=Datos Partic.")
Set jbtnEstadisticas = frameCertificados.JavaButton("tagname:=Estadisticas")

 Set objBrowserRepo =  Browser("Acsel 12")
 Set objPageAcselRepo = objBrowserRepo.Page("Acsel 12")
 Set JavaMainRepo = objPageAcselRepo.JavaApplet("Main")
 Set frameCoberturasPorCertificadoRepo = JavaMainRepo.JavaInternalFrame("Coberturas por Certificado")
 Set jbtnReFacturar = frameCoberturasPorCertificadoRepo.JavaButton("Re-Facturar")
 Set jtxtCobA002=frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "text:=A002")
 Set jtxtCobA051=frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "text:=A051") 
 Set jtxtCodPlan = frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "index:=7")
 Set jtxtCobertura=frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "index:=1")
 Set jtxtCobertura2=frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "index:=0")
 
' For Iterator = 0 To 63 Step 1
'	Set jtxtPaisPlaca = frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtPaisPlaca.Highlight
'	wait 2
'Next
 
Set frameListaCoberturas=JavaMainRepo.JavaInternalFrame("tagname:=Consulta de Coberturas")
Set jtxtBuscarListaDeCoberturas=frameListaCoberturas.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaDeCoberturas = frameListaCoberturas.JavaList("tagname:=Buscar")
Set jbtnBuscarListaDeCoberturas = frameListaCoberturas.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaDeCoberturas = frameListaCoberturas.JavaButton("tagname:=Aceptar")
 
'For Iterator = 0 To 63 Step 1
'	Set jtxtPaisPlaca = frameCoberturasPorCertificadoRepo.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtPaisPlaca.Highlight
'	wait 2
'Next


 Set jtabTabsCoberturas=frameCoberturasPorCertificadoRepo.JavaTab("tagname:=TabBar")
 
 Set frameListaDePolizasRepo = JavaMainRepo.JavaInternalFrame("Lista de Polizas")
 Set jbtnActualizar = frameListaDePolizasRepo.JavaButton("Actualizar")
 
Set frameEstadisticasDelCertificado = javaMain.JavaInternalFrame("tagname:=Estadisticas del Certificado")
Set jtxtSts = frameEstadisticasDelCertificado.JavaEdit("tagname:=VTextField", "index:=17")

Set frameResponsableDePago = javaMain.JavaInternalFrame("tagname:=Responsable.*")

Set jtabTabsResponsableDePago = frameResponsableDePago.JavaTab("tagname:=TabBar")
Set jtabTabsCertificados = frameCertificados.JavaTab("tagname:=TabBar")
Set frameListaDePolizas = javaMain.JavaInternalFrame("tagname:=:: Lista de Polizas.*")
Set jtabTabsListaDePolizas = frameListaDePolizas.JavaTab("tagname:=TabBar")
Set jtxtStsFin = frameListaDePolizas.JavaEdit("tagname:=VTextField", "text:=ACT")

Set frameNumeroDeTramiteBizflow = javaMain.JavaInternalFrame("tagname:=Numero de Tramite BIZFLOW")
Set jbtnAceptarNumetroDeTramiteBizFlow = frameNumeroDeTramiteBizflow.JavaButton("tagname:=Aceptar")

Set frameActualizacionTemporal = JavaMainRepo.JavaInternalFrame("Actualizacion Temporal")
Set jbtnCambiarEstatusDeLaPolizaAnulado = frameActualizacionTemporal.JavaButton("Cambiar Estatus de a Poliza ha Anulado")
Set frameOperacionesDeLaPoliza = JavaMainRepo.JavaInternalFrame("Operaciones de la Poliza")
Set jbtnActualizarO = frameOperacionesDeLaPoliza.JavaButton("Actualizar O")

'Set frameResponsableDePago = javaMain.JavaInternalFrame("tagname:=Responsable.*")
Set jtxtCliente = frameResponsableDePago.JavaEdit("tagname:=VTextField", "index:=31")

Set jtxtViaDeCobro = frameResponsableDePago.JavaEdit("tagname:=VTextField", "index:=46")
Set frameViasDeCobro = javaMain.JavaInternalFrame("tagname:=Vías de Cobro")
Set jcmbBuscarListaViasDeCobro  = frameViasDeCobro.JavaList("tagname:=Buscar")
Set jbtnAceptarListaViasDeCobro  = frameViasDeCobro.JavaButton("tagname:=Aceptar")

Set jtxtZonaDeGestion = frameResponsableDePago.JavaEdit("tagname:=VTextField", "index:=14")
Set frameZonaGestion = javaMain.JavaInternalFrame("tagname:=Zona Gestión")
Set jcmbBuscarZonaGestion  = frameZonaGestion.JavaList("tagname:=Buscar")
Set jbtnAceptarListaZonaGestion  = frameZonaGestion.JavaButton("tagname:=Aceptar")

'For Iterator = 0 To 63 Step 1
'	Set jtxtPaisPlaca = frameResponsableDePago.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtPaisPlaca.Highlight
''	wait 2
'Next

Set frameAcuerdosDePago = javaMain.JavaInternalFrame("tagname:=Acuerdos de pago")
Set jtxtBuscarListaAcuerdosDePago = frameAcuerdosDePago.JavaEdit("tagname:=Buscar")
Set jcmbBuscarListaAcuerdosDePago  = frameAcuerdosDePago.JavaList("tagname:=Buscar")
Set jbtnBuscarListaAcuerdosDePago  = frameAcuerdosDePago.JavaButton("tagname:=Buscar")
Set jbtnAceptarListaAcuerdosDePago  = frameAcuerdosDePago.JavaButton("tagname:=Aceptar")


'Set jtabTabs = frameDatosParticularesDelVehiculo.JavaTab("tagname:=TabBar")
'jtxtOficinaEmisora.Highlight
'For Iterator = 0 To 63 Step 1
'	Set jtxtSts = frameEstadisticasDelCertificado.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtSts.Highlight
''	wait 2
'Next
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strListaTipoModelo = DataTable.Value("LISTA_TIPO_MODELO")
strPlaca = DataTable.Value("PLACA")
strAutoServicio = DataTable.Value("AUTO_SERVICIO")
strAnioDelVehiculo = DataTable.Value("ANIO_DEL_VEHICULO")
strBuscarListaDeMarca = DataTable.Value("BUSCAR_LISTA_DE_MARCA")
strListaDeMarca = DataTable.Value("LISTA_DE_MARCA")
strBuscarListaDeModelo = DataTable.Value("BUSCAR_LISTA_DE_MODELO")
strListaDeModelo = DataTable.Value("LISTA_DE_MODELO")
strBuscarTipoDeVehiculo = DataTable.Value("LISTA_DE_TIPO_DE_VEHICULO")
strTipoDeVehiculo = DataTable.Value("TIPO_DE_VEHICULO")
strBuscaListaDeTipo = DataTable.Value("BUSCAR_LISTA_DE_TIPO") 
intListaDeTipo = CInt(DataTable.Value("LISTA_TIPO_DE_VEHICULO"))
strUsado = DataTable.Value("USADO")
strTipoValor = DataTable.Value("TIPO_VALOR")
strBuscarUsoDelVehiculo = DataTable.Value("BUSCAR_USO_DEL_VEHICULO")
strUsoDelVehiculo = DataTable.Value("USO_DEL_VEHICULO")
strBuscarTipoDeRemolque = DataTable.Value("BUSCAR_TIPO_DE_REMOLQUE")
strTipoDeRemolque = DataTable.Value("TIPO_DE_REMOLQUE")
strBuscarPuertaDeEntradaUsa = DataTable.Value("BUSCAR_PUERTA_DE_ENTRADA_USA")
strPuertaDeEntradaUsa = DataTable.Value("PUERTA_DE_ENTRADA_USA")
strBuscarLIstaDeColor = DataTable.Value("BUSCAR_LISTA_DE_COLOR")
strListaDeColor = DataTable.Value("LISTA_DE_COLOR")
strFechaMod = DataTable.Value("FECHA_MOD")
strBuscarListaPaisEstadoPlaca = DataTable.Value("BUSCAR_LISTA_PAIS_ESTADO_PLACA")
strListaPaisEstadoPlaca = CInt(DataTable.Value("LISTA_PAIS_ESTADO_PLACA"))
strBuscarListaAcuerdoDePago = DataTable.Value("BUSCAR_LISTA_ACUERDOS_DEPAGO")
strListaAcuerdoDePago = DataTable.Value("ACUERDO_DE_PAGO")
strListaDeCobro = DataTable.Value("LISTA_DE_COBRO")
strBuscarZonaGestion = DataTable.Value("BUSCAR_ZONA_GESTION")
strBuscarLIstaDeCoberturas= DataTable.Value("BUSCAR_LISTA_DE_COBERTURA")
strBuscarLIstaDeCoberturas2=DataTable.Value("BUSCAR_LISTA_DE_COBERTURA2")
srtListaDeCoberturas=CInt(DataTable.Value("LISTA_DE_COBERTURA"))
strSubTabRespDePago = "Resp. de Pago"
strSubTabCerfificados = "Certificados"
strSubTabPoliza = "Poliza"
strSubTabPolizas = "Polizas"
strMsjExpected = "ACT"
strSubTabDetalles="Detalles"
strSubTabCobertutas="Coberturas"
'strDate = Date()
intTiempoEspera = Cint(10)
'strParamTipoCliente = Parameter("TIPO_DE_CLIENTE")
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Datos Particulares
jtxtTipoVehiculo.Type strCtrL
jcmbBuscarListaTipoModelos.Select strListaTipoModelo
jbtnAceptarListaTipoModelos.Click
jtxtAutoservicio.Type strCtrL
jcmbBuscarAutoServicios.Select strAutoServicio
jbtnAceptarAutoServicios.Click
wait 2
jtxtPlaca.Type strPlaca
jtxtAnioDelVehiculo.Set strAnioDelVehiculo
jtxtModelo.Type strCtrL
fnClickOnjToolBar oToolBar.ENTRAR_CONSULTA
jtxtMarca.Type strCtrL
jtxtBuscarListaDeMarcas.Set strBuscarListaDeMarca
jbtnBuscarListaDeMarcas.Click
jcmbBuscarListaDeMarcas.Select strListaDeMarca
jbtnAceptarListaDeMarcas.Click
wait 2
jtxtModelo2.Type strCtrL
jtxtBuscarListaDeModelos.Set strBuscarListaDeModelo
jbtnBuscarListaDeModelos.Click
jcmbBuscarListaDeModelos.Select strListaDeModelo
jbtnAceptarListaDeModelos.Click
wait 2
jtxtTipoDeVehiculo.Type strCtrL
jtxtBuscarListaDeTiposDeVehiculos.Set strBuscarTipoDeVehiculo
jbtnBuscarListaDeTiposDeVehiculos.Click
jcmbBuscarListaDeTiposDeVehiculos.Select strTipoDeVehiculo
jbtnAceptarListaDeTiposDeVehiculos.Click
wait 2
jtxtSbg.Type strCtrL
jtxtBuscarListaDeTipos.Set strBuscaListaDeTipo
jbtnBuscarListaDeTipos.Click
jcmbBuscarListaDeTipos.Select intListaDeTipo
jbtnAceptarListaDeTipos.Click
jbtnConsultar.Click
jbtnSeleccion.Click

jcmbUsado.Select strUsado
jcmbTipoValor.Select strTipoValor
jtxtUso.Type strCtrL
jtxtBuscarUsoDelVehiculo.Set strBuscarUsoDelVehiculo
jbtnBuscarUsoDelVehiculo.Click
jcmbBuscarUsoDelVehiculo.Select strUsoDelVehiculo
jbtnAceptarUsoDelVehiculo.Click
wait 2
jtxtTipoRemolque.Type strCtrL
jtxtBuscarTiposDeRemolque.Set strBuscarTipoDeRemolque
jbtnBuscarTiposDeRemolque.Click
jcmbBuscarTiposDeRemolque.Select strTipoDeRemolque
jbtnAceptarTiposDeRemolque.Click
wait 2
jtxtEntrada.Type strCtrL
jtxtBuscarPuertasDeEntradaUsa.Set strBuscarPuertaDeEntradaUsa
jbtnBuscarPuertasDeEntradaUsa.Click
jcmbBuscarPuertasDeEntradaUsa.Select strPuertaDeEntradaUsa
jbtnAceptarPuertasDeEntradaUsa.Click
wait 2
jtxtColor.Type strCtrL
jtxtBuscarListaDeColores.Set strBuscarLIstaDeColor
jbtnBuscarListaDeColores.Click
jcmbBuscarListaDeColores.Select strListaDeColor
jbtnAceptarListaDeColores.Click
wait 2
strRandomVin = fnGetRandomVin()
jtxtNoMotor.Set strRandomVin
jtxtNoSerie.Set strRandomVin
jtxtNoSerie.Type strTab
jbtnOkAlert.Click
wait 1
jbtnOkAlert.Click
wait 1
jbtnOkAlert.Click
jtxtNoSerie.Set strRandomVin
jtxtNoSerie.Type strTab
jtxtTipoCarga.Type strTab
jtxtFechaMod.Set strFechaMod
wait 1
jtxtPaisPlaca.Type strCtrL
jtxtBuscarListaPaisEstadoPlaca.Set strBuscarListaPaisEstadoPlaca
jbtnBuscarListaPaisEstadoPlaca.Click
jcmbBuscarListaPaisEstadoPlaca.Select strListaPaisEstadoPlaca
jbtnAceptarListaPaisEstadoPlaca.Click
fnPressTab()
wait 1
fnPressTab()
wait 5
fnClickOnjToolBar oToolBar.SALVAR
wait 5
''''wait 5
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist frameCertificados, intTiempoEspera
''''fnClickOnjToolBar oToolBar.SALIR
''''fnValidateAnObjctExist frameCertificados, intTiempoEspera
wait 30
jbtnCoberturas.Click
jbtnReFacturar.Click
fnClickOnjToolBar oToolBar.SALIR
jbtnDatosPartic.Click
fnClickOnjToolBar oToolBar.SALVAR
wait 5
fnClickOnjToolBar oToolBar.SALIR
jbtnCoberturas.Click
jbtnReFacturar.Click

strCodPlan= jtxtCodPlan.GetROProperty("text")
If strCodPlan="A01" Then

	jtxtCobA002.Type strTab
	jtxtCobertura.Type strCtrL
	jtxtBuscarListaDeCoberturas.Set strBuscarLIstaDeCoberturas
	jbtnBuscarListaDeCoberturas.Click
	jcmbBuscarListaDeCoberturas.Select srtListaDeCoberturas
	jbtnAceptarListaDeCoberturas.Click
	fnClickOnjToolBar oToolBar.SALVAR
	jtabTabsCoberturas.Select strSubTabCobertutas
	
	jtxtCobA051.Type strTab
	jtxtCobertura2.Type strCtrL
	jtxtBuscarListaDeCoberturas.Set strBuscarLIstaDeCoberturas2
	jbtnBuscarListaDeCoberturas.Click
	jcmbBuscarListaDeCoberturas.Select srtListaDeCoberturas
	jbtnAceptarListaDeCoberturas.Click
	fnClickOnjToolBar oToolBar.SALVAR
	jtabTabsCoberturas.Select strSubTabCobertutas
	
End If
fnClickOnjToolBar oToolBar.SALIR
jbtnEstadisticas.Click

'Mientras el campo Sts contenga un valor, entonces borro el registro
blnTieneValor = True
While blnTieneValor
	fnClickOnjToolBar oToolBar.ELIMINAR_REGISTRO
	jbtnOkAlert.Click
	strSts = jtxtSts.GetROProperty("text")
	If strSts = "" Then
		blnTieneValor = False
	End If
Wend
fnClickOnjToolBar oToolBar.SALIR
jtabTabsCertificados.Select strSubTabRespDePago
fnValidateAnObjctExist frameResponsableDePago, intTiempoEspera
jtxtCliente.Set ""
fnPressTab()
wait 0.5
fnPressTab()
wait 0.5
fnPressTab()
jtxtBuscarListaAcuerdosDePago.Set strBuscarListaAcuerdoDePago
jbtnBuscarListaAcuerdosDePago.Click
jcmbBuscarListaAcuerdosDePago.Select strListaAcuerdoDePago
jbtnAceptarListaAcuerdosDePago.Click
jtxtViaDeCobro.Type strCtrL
jcmbBuscarListaViasDeCobro.Select strListaDeCobro
jbtnAceptarListaViasDeCobro.Click
jtxtZonaDeGestion.Type strCtrL
jcmbBuscarZonaGestion.Select strBuscarZonaGestion
jbtnAceptarListaZonaGestion.Click
fnPressTab()
fnClickOnjToolBar oToolBar.SALVAR
jtabTabsResponsableDePago.Select strSubTabCerfificados
jtabTabsCertificados.Select strSubTabPoliza
While frameCertificados.Exist(5)
	jtabTabsCertificados.Select strSubTabPoliza
	wait 7
Wend
jtabTabsListaDePolizas.Select strSubTabPolizas
fnValidateAnObjctExist frameListaDePolizas, intTiempoEspera
jbtnActualizar.Click
jbtnAceptarNumetroDeTramiteBizFlow.Click
jbtnCambiarEstatusDeLaPolizaAnulado.Click
jbtnSiAlert.Click
jbtnActualizarO.Click
jbtnSiAlert.Click
strMsjActual = jtxtStsFin.GetROProperty("text")
fnValidateMatchMessage strMsjActual, strMsjExpected
'Borrar highlight y ctrlF4 cuando funcione el addin de edge
objBrowserAcsel.Highlight
fnPressCtrlF4()
objBrowserAcsel.CloseAllTabs()

