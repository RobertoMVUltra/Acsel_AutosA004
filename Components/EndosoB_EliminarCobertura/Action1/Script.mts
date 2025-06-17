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
Set jtxtCodigoCobertura=frameCoberturas.JavaEdit("tagname:=VTextField", "text:=A018")
Set jbtnExcluriCobertura=frameCoberturas.JavaButton("tagname:=VButton", "index:=1")
Set frameExclusionCobertura=javaMain.JavaInternalFrame("tagname:=Exclusion de Cobertura")
Set jtxtMotivo=frameExclusionCobertura.JavaEdit("tagname:=VTextField", "index:=3")
Set jtxtFchExclusion=frameExclusionCobertura.JavaEdit("tagname:=VTextField", "index:=2")
Set frameMotivoExclusion=javaMain.JavaInternalFrame("tagname:=Motivo de Excluision")
Set jtxtMotivoExclusionBuscar=frameMotivoExclusion.JavaEdit("tagname:=Buscar")
Set jbtnMotivoExclusionBuscar=frameMotivoExclusion.JavaButton("tagname:=Buscar")
Set jcmbMotivoExclusionBuscar=frameMotivoExclusion.JavaList("tagname:=Buscar")
Set jbtnMotivoExclusionAceptar=frameMotivoExclusion.JavaButton("tagname:=Aceptar")
Set jbtnOk=frameExclusionCobertura.JavaButton("tagname:=Ok")
Set frameEndoso=javaMain.JavaInternalFrame("tagname:=Endosos de Póliza.*")
Set jcheckboxDescripcion=frameEndoso.JavaCheckBox("tagname:=LWCheckbox", "index:=4")

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


'''''''''''''''''''''''''''''''Variables Globales'''''''''''''''''''''''''''''''''''''''''''''''
strCtrL = micCtrl & "L"
strTab = micTab
strSubMenuCertificados="Certificados"
strSubMenuRamos="Ramos"
strSubMenuModificacion="Modificación"
intTiempoEspera=15
strCodMotivoExclusion=DataTable.Value("COD_MOTIVO_EXCLUSION")
strMotivoExclusion=DataTable.Value("MOTIVO_EXCLUSION")
strFchExclusion=DataTable.Value("FCH_EXCLUSION")
'''''''''''''''''''''''''''''''''''Flujo'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

jtabTabsListaPolizasSubMenu.Select strSubMenuCertificados
jtabTabsCertificadoSubMenu.Select strSubMenuRamos
jbtnCoberturas.Click
jtxtCodigoCobertura.Type strCtrL
jbtnExcluriCobertura.Click
jtxtFchExclusion.Set strFchExclusion
jtxtMotivo.Type strCtrL
jtxtMotivoExclusionBuscar.Set strCodMotivoExclusion
jbtnMotivoExclusionBuscar.Click
jcmbMotivoExclusionBuscar.Select strMotivoExclusion
jbtnMotivoExclusionAceptar.Click
jbtnOk.Click
jcheckboxDescripcion.Click 1,1
fnClickOnjToolBar oToolBar.SALVAR
fnClickOnjToolBar oToolBar.SALIR
fnValidateAnObjctExist frameCoberturas, intTiempoEspera
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
