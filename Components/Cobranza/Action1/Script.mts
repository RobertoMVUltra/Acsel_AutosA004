'''''''''''''''''''''''''''''''''Repositorio de objetos'''''''''''''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x11g v2")
Set frameCobranza=javaMain.JavaInternalFrame("tagname:=Cobranza.*")
Set jtxtOficina= frameCobranza.JavaEdit("tagname:=VTextField", "index:=2")
Set jtxtProducto=frameCobranza.JavaEdit("tagname:=VTextField", "index:=3")
Set jbtnSiguiente=frameCobranza.JavaButton("tagname:=Siguiente >")
Set jtxtPoliza=frameCobranza.JavaEdit("tagname:=VTextField", "index:=4")
Set jtxtIdentificacion=frameCobranza.JavaEdit("tagname:=VTextField", "index:=9")
Set jtxtTipoCobro=frameCobranza.JavaEdit("tagname:=VTextField", "index:=46")
Set jtxtDesDocumento=frameCobranza.JavaEdit("tagname:=VTextField", "index:=58")
Set jtxtTotales=frameCobranza.JavaEdit("tagname:=VTextField", "index:=106")
Set frameAcuerdos=javaMain.JavaInternalFrame("tagname:=Acuerdos")
Set jtxtStsReciboCobro=frameAcuerdos.JavaEdit("tagname:=VTextField", "index:=0")
Set jtxtTipo=frameCobranza.JavaEdit("tagname:=VTextField", "index:=26")
Set jtxtNoCta=frameCobranza.JavaEdit("tagname:=VTextField", "index:=51")
Set jtxtMda=frameCobranza.JavaEdit("tagname:=VTextField", "index:=87")
Set jtxtMonto=frameCobranza.JavaEdit("tagname:=VTextField", "index:=105")
Set frameObservacion=javaMain.JavaInternalFrame("tagname:=Observación.*")
Set jbtnAceptar=frameObservacion.JavaButton("tagname:=Aceptar")
Set frameAcsel=javaMain.JavaInternalFrame("tagname:=Acsel.*")
Set jbtnOk=frameAcsel.JavaButton("tagname:=OK")
Set frameEntregaCaja=javaMain.JavaInternalFrame("tagname:=Entrega.*")
Set jbtnCancelar=frameEntregaCaja.JavaButton("tagname:=Cancelar")
Set jbtnFinalizar=frameCobranza.JavaButton("tagname:=Finalizar")
'For Iterator = 105 To 163 Step 1
'	Set jtxtPaisPlaca = frameCobranza.JavaEdit("tagname:=VTextField", "index:="&Iterator)
'	jtxtPaisPlaca.Highlight
'	wait 2
'Next

Set frameTipoIngreso=javaMain.JavaInternalFrame("tagname:=Tipo de Ingreso")
Set jtxtBuscarTipoCobro=frameTipoIngreso.JavaEdit("tagname:=Buscar")
Set jbtnBuscarTipoCobro=frameTipoIngreso.JavaButton("tagname:=Buscar")
Set jcmbBuscarTipoCobro=frameTipoIngreso.JavaList("tagname:=Buscar")
Set jbtnAceptarTipoCobro=frameTipoIngreso.JavaButton("tagname:=Aceptar	")

Set frameTipoIngresoDescuento=javaMain.JavaInternalFrame("tagname:=Tipos de Documentos.*")
Set jtxtBuscarTipoCobroDescuento=frameTipoIngresoDescuento.JavaEdit("tagname:=Buscar")
Set jbtnBuscarTipoCobroDescuento=frameTipoIngresoDescuento.JavaButton("tagname:=Buscar")
Set jcmbBuscarTipoCobroDescuento=frameTipoIngresoDescuento.JavaList("tagname:=Buscar")
Set jbtnAceptarTipoCobroDescuento=frameTipoIngresoDescuento.JavaButton("tagname:=Aceptar")
'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strOficina = DataTable.Value("OFICINA")
strProducto = DataTable.Value("PRODUCTO")
strPoliza=DataTable.Value("POLIZA")
strBuscarTipoCobro=DataTable.Value("BUSCAR_TIPO_COBRO")
strBuscarListaTipoCobro=DataTable.Value("LISTA_COBRO")
strBuscarTipoCobroDescuento=DataTable.Value("DESCUENTOS_INGRESOS")
intTiempoEspera = 10
'''''''''''''''''''''''''''Flujo del Script''''''''''''''''''''''''''''''''''''''''''''''''''''''

jtxtOficina.Set strOficina
jtxtProducto.Set strProducto
jtxtPoliza.Set strPoliza

jtxtIdentificacion.Type strTab
jtxtTipoCobro.Type strCtrL

jtxtBuscarTipoCobro.Set strBuscarTipoCobro
jbtnBuscarTipoCobro.Click
jcmbBuscarTipoCobro.Select strBuscarListaTipoCobro
jbtnAceptarTipoCobro.Click

jtxtDesDocumento.Type strTab
jtxtStsReciboCobro.Type strTab
strReciboTotal=jtxtTotales.GetROProperty("text")
jbtnSiguiente.Click
jtxtTipo.Type strCtrL
jtxtBuscarTipoCobroDescuento.Set strBuscarTipoCobroDescuento
jbtnBuscarTipoCobroDescuento.Click
jtxtNoCta.Type strTab
jtxtMda.Type strTab
jtxtMonto.Set strReciboTotal
wait 2 
jbtnSiguiente.RefreshObject
jbtnSiguiente.Click
jbtnAceptar.Click
jbtnOk.Click
jbtnCancelar.Click
jbtnFinalizar.Click
