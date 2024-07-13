''''''''''''''''''''''''''''''''''''''''''''''''Repositorio de Objetos''''''''''''''''''''''''''''''
Set objBrowserAcsel = Browser("name:=Acsel.*")
Set objPageAcsel = objBrowserAcsel.Page("title:=Acsel.*")
Set javaMain = objPageAcsel.JavaApplet("tagname:=Main")
Set frameListaPolizas=javaMain.JavaInternalFrame("tagname:=:: Lista de Polizas.*")
Set frameCertificados=javaMain.JavaInternalFrame("tagname:=:: Certificados.*")
Set jtabTabsListaPolizasSubMenu=frameListaPolizas.JavaTab("tagname:=TabBar")
Set jtabTabsCertificadoSubMenu=frameCertificados.JavaTab("tagname:=TabBar")
Set jbtnCoberturas=frameCertificados.JavaButton("tagname:=Coberturas")
Set frameCoberturas=javaMain.JavaInternalFrame("tagname:=Coberturas por Certificado.*")
Set jtxtCodigoCobertura=frameCoberturas.JavaEdit("tagname:=VTextField", "text:=A004")
Set  jtabTabsCoberturasSubMenu=frameCoberturas.JavaTab("tagname:=TabBar")
Set jtxtSumaAsegurado=frameCoberturas.JavaEdit("tagname:=VTextField", "index:=30")
Set jbtnIncluirModificacion=frameCoberturas.JavaButton("tagname:=VButton", "index:=0")
Set frameForms=javaMain.JavaInternalFrame("tagname:=Forms.*")
Set jbtnAceptar=frameForms.JavaButton("tagname:=Aceptar")
Set frameEndoso=javaMain.JavaInternalFrame("tagname:=Endosos de Póliza.*")


Set jcheckboxDescripcion=frameEndoso.JavaCheckBox("tagname:=LWCheckbox", "index:=1")
Set jbtnActualizar = frameListaPolizas.JavaButton("tagname:=VButton", "index:=0")
Set frameNumeroDeTramiteBizflow = javaMain.JavaInternalFrame("tagname:=Numero de Tramite BIZFLOW")
Set jbtnAceptarNumetroDeTramiteBizFlow = frameNumeroDeTramiteBizflow.JavaButton("tagname:=Aceptar")
Set frameActualizacionTemporal = javaMain.JavaInternalFrame("tagname:=Actualizacion Temporal")
Set jbtnCambiarEstatusPoliza=frameActualizacionTemporal.JavaButton("tagname:=VButton", "index:=0")
Set frameAcsel = javaMain.JavaInternalFrame("tagname:=Acsel/x.*")
Set jbtnCambiarEstatusPoliza2=frameAcsel.JavaButton("tagname:=Si")
Set frameOperacionesPoliza = javaMain.JavaInternalFrame("tagname:=Operaciones de la Poliza.*")
Set jbtnActualizarOperacion=frameOperacionesPoliza.JavaButton("tagname:=VButton", "index:=0")
Set jbtnImprimirEndosoNo=frameAcsel.JavaButton("tagname:=No")
'For Iterator = 0 To 63 Step 1
'	Set jcheckboxDescripcion=frameEndoso.JavaCheckBox("tagname:=LWCheckbox", "index:="&Iterator)
'	jcheckboxDescripcion.Highlight
'	wait 2
'Next

'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strSubMenuCertificados="Certificados"
strSubMenuRamos="Ramos"
strSubMenuModificacion="Modificación"
intTiempoEspera=15
strSumaAsegurada=DataTable.Value("SUMA_ASEGURADA")
'''''''''''''''''''''''''''''''''''Flujo'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

jtabTabsListaPolizasSubMenu.Select strSubMenuCertificados
jtabTabsCertificadoSubMenu.Select strSubMenuRamos
jbtnCoberturas.Click
jtxtCodigoCobertura.Type micTab
jtabTabsCoberturasSubMenu.Select strSubMenuModificacion
fnClickOnjToolBar oToolBar.CREAR_REGISTRO
jtxtSumaAsegurado.Type micTab
jtxtSumaAsegurado.Set strSumaAsegurada
jbtnIncluirModificacion.Click

While jbtnAceptar.Exist(2)
	jbtnAceptar.Click
Wend

jcheckboxDescripcion.Click 1,1

fnClickOnjToolBar oToolBar.SALVAR
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist jtabTabsCoberturasSubMenu, intTiempoEspera
fnClickOnjToolBar oToolBar.SALIR
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist jbtnActualizar, intTiempoEspera

jbtnActualizar.Click
jbtnAceptarNumetroDeTramiteBizFlow.Click
fnValidateAnObjctExist jbtnCambiarEstatusPoliza, intTiempoEspera
jbtnCambiarEstatusPoliza.Click
jbtnCambiarEstatusPoliza2.Click
jbtnActualizarOperacion.Click
jbtnImprimirEndosoNo.Click
fnValidateAnObjctExist frameListaPolizas, intTiempoEspera

objBrowserAcsel.Highlight
fnPressCtrlF4()
objBrowserAcsel.CloseAllTabs()
