// ==UserScript==
// @name     				Backmarket Rate Page Fix
// @version  				2
// @grant    				none
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

var node = document.querySelector('[title="Page suivante"]');
var nodeBack = document.querySelector('[title="Page précédente"]');
var pageRate = document.querySelector('.merchants-orders-rates');
var pageListing = document.querySelector('.merchants-listings-listings');
var pageSav = document.querySelector('.merchants-savs-sav-list');
var test = document.querySelector('.id_message');
var templates = document.querySelector('#selectTemplates');
var elmtsMer = document.getElementsByClassName("bubble-container bubble-container-merchant");
var elmtsCl = document.getElementsByClassName("bubble-container bubble-container-client");
var arrMer = Array.prototype.slice.call( elmtsMer );
var arrCl = Array.prototype.slice.call( elmtsCl );
var nameBack = document.getElementsByClassName("bubble-infos");
var arrBack = Array.prototype.slice.call( nameBack );
var i = 1;

if(templates != null) {
	$('#selectTemplates')
  	.find('option')
    .remove()
    .end()
	;

	$('#selectTemplates')
    .find('optgroup')
    .remove()
    .end()
    .append("<optgroup id=returnProd label='Procédure de Retour'></optgroup>")
    .append("<optgroup id=clientTest label='Tests Client'></optgroup>")
    .append("<optgroup id=sav label='SAV'></optgroup>")
    .append("<optgroup id=warrantyCondition label='Conditions de Garantie'></optgroup>")
    .append("<optgroup id=transport label='Transport'></optgroup>")
    .append("<optgroup id=other label='Autres'></optgroup>")
	;

	$('#selectTemplates')
    .find('#returnProd')
		.append('<option value="Retour Accessoires">Retour Accessoires</option>').val("1");
	$('#selectTemplates')
    .find('#returnProd')
		.append('<option value="Photos Avant Retour">Photos Avant Retour</option>').val("2");
	$('#selectTemplates')
    .find('#returnProd')
		.append('<option value="Retour Bon Chronopost">Retour Bon Chronopost</option>').val("3");
	$('#selectTemplates')
    .find('#returnProd')
		.append('<option value="Rétractation">Rétractation</option>').val("4");
	$('#selectTemplates')
    .find('#returnProd')
		.append('<option value="Rétractation Bon Chrono">Rétractation Bon Chrono</option>').val("5");
  
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Réinitialisation Apple jusqu\'au 6S">Réinitialisation Apple jusqu\'au 6S</option>').val("1");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Réinitialisation Apple">Réinitialisation Apple</option>').val("2");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Réinitialisation Samsung">Réinitialisation Samsung</option>').val("3");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Réinitialisation Huawei">Réinitialisation Huawei</option>').val("4");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Réinitialisation Xperia">Réinitialisation Xperia</option>').val("5");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Micro Téléphone">Micro Téléphone</option>').val("6");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Nettoyage Ecouteur Appel">Nettoyage Ecouteur Appel</option>').val("7");
	$('#selectTemplates')
    .find('#clientTest')
		.append('<option value="Sélection Réseau Samsung">Sélection Réseau Samsung</option>').val("8");
  
	$('#selectTemplates')
    .find('#sav')
		.append('<option value="Attente Echange">Attente Echange</option>').val("1");
	$('#selectTemplates')
    .find('#sav')
		.append('<option value="iCloud">iCloud</option>').val("2");
	$('#selectTemplates')
    .find('#sav')
		.append('<option value="Diagnostic En Cours">Diagnostic En Cours</option>').val("3");
	$('#selectTemplates')
    .find('#sav')
		.append('<option value="Oubli Accessoire">Oubli Accessoire</option>').val("4");
	$('#selectTemplates')
    .find('#sav')
		.append('<option value="Proposition Echange">Proposition Echange</option>').val("5");
  
	$('#selectTemplates')
    .find('#warrantyCondition')
		.append('<option value="Exclusion De Garantie">Exclusion De Garantie</option>').val("1");
	$('#selectTemplates')
    .find('#warrantyCondition')
		.append('<option value="Tarif Renvoi Refus">Tarif Renvoi Refus</option>').val("2");
	$('#selectTemplates')
    .find('#warrantyCondition')
		.append('<option value="Garantie Dépassée">Garantie Dépassée</option>').val("3");
  
	$('#selectTemplates')
    .find('#transport')
		.append('<option value="Colis Perdu Ou Volé">Colis Perdu Ou Volé</option>').val("1");
	$('#selectTemplates')
    .find('#transport')
		.append('<option value="Transmission Document Chrono">Transmission Document Chrono</option>').val("2");
	$('#selectTemplates')
    .find('#transport')
		.append('<option value="Contestation De Livraison">Contestation De Livraison</option>').val("3");
  
	$('#selectTemplates')
    .find('#other')
		.append('<option value="Expédition Commande">Expédition Commande</option>').val("1");
	$('#selectTemplates')
    .find('#other')
		.append('<option value="Plus De 6 Mois">Plus De 6 Mois</option>').val("2");


	arrMer.forEach(function(element) {
		element.setAttribute("style", "justify-content:flex-end;");
	});
                 
	arrCl.forEach(function(element) {
		element.setAttribute("style", "justify-content:flex-start;");
	});

	$("#selectTemplates").change(function() {
  	var selectedTemplate = templates.selectedOptions[0].value;
  	  switch(selectedTemplate) {
      case 'Retour Accessoires':
        $("#id_message").val("Bonjour,\n\nMerci de nous retourner les mauvais accessoires à l'adresse suivante, un simple timbre suffira ainsi nous vous rembourserons les frais de port à hauteur de 2€ maximum  sous présentation de la facture :\n\nSOCIETE LEGSM\n10 Rue Lebouis\n75014 Paris\n\nDès réception, nous constaterons les pannes et vous enverrons dans la foulée des accessoires neufs par courrier postal  sans frais.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Photos Avant Retour':
        $("#id_message").val("Bonjour,\n\nAvant de vous envoyer la procédure à suivre pour un retour de votre appareil dans de bonnes conditions. Nous vous demanderons de nous fournir 6 photos de votre appareil  :\n\n- Une photo de face de votre appareil (allumé sur la page où figure l'IMEI (Appareils Apple : Paramètres -> Général -> Informations -> IMEI ; Android & Autres : Paramètres Réglages -> taper IMEI  dans la barre de recherche). Bien évidemment, nous comprendrons qu'il sera impossible de voir l'IMEI dans le cas où vous souhaiteriez envoyer un mobile ne s'allumant plus. Veuillez donc nous fournir une   photo de l'écran éteint si c'est le cas.\n- Une photo de l'arrière de votre appareil\n- Une photo de chaque tranche (avec coins visibles) soit 4 photos\n\nNous vous remercions pour le soin apporté à ces  photos afin qu'elles soient claires.\n\nVous pouvez les faire parvenir à l'adresse sav@mobilerachat.com dans le cas où vous n'arriveriez pas à les envoyer sur la plateforme. Merci de préciser votre nom  de famille si votre adresse mail ne le contient pas ou un numéro de commande.\n\nDe plus, nous vous demanderons de retirer les comptes utilisateurs de votre appareil (iCloud ou Google). Voici la   procédure à suivre si vous ne savez pas comment faire : \n\nPour Apple : Aller sur le site pour prendre connaissance de la démarche : http://www.andromac.fr/questions-frequentes/  comment-desactiver-la-fonction-localiser-mon-iphone-si-mon-iphone-ne-sallume-plus\n\nPour Android : Aller sur le site pour prendre connaissance de la démarche : http://www.prodigemobile.com/tutoriel/ supprimer-compte-google-android/\n\nMerci de prendre connaissance du fait que tout compte iCloud (appareils Apple) peut-être retiré via un ordinateur, un compte iCloud relié à un appareil qui ne   s'allumerait plus ou ne fonctionnerait plus peut donc être retiré.\nA l'inverse, nous sommes tout à fait conscient qu'un appareil Android non fonctionnel ne pourra voir son compte Google  retiré.\n\nEnfin, nous serons dans l'obligation d'attendre votre confirmation écrite quant au retrait du compte iCloud, ce que nous vérifierons avant de vous fournir la procédure de retour.\n\nAucune  procédure de retour ne sera fournie pour un appareil bloqué par un compte iCloud. De la même manière, tout appareil Android bloqué dont le compte Google aurait pu être retiré à l'envoi ne sera pas   diagnostiqué dans l'attente du réglement des frais de retour vers son propriétaire pour déblocage.\n\nCordialement,\nLe service client MobileRachat.");
        break;
      case 'Retour Bon Chronopost':
        $("#id_message").val("Bonjour,\n\nMerci de lire le mail attentivement, jusqu\'au bout et de suivre la totalité des indications.\n\nVoici les étapes à suivre pour nous retourner le produit défectueux  afin d’obtenir la réparation ou l’échange du mobile :\n\n1. Veuillez trouver ci-joint le bon prépayé Chronopost qu\'il vous faudra coller sur le colis lors de l\'envoi (vous le trouverez en pièce jointe   en vous connectant à votre compte et vous rendant dans notre échange.)\n\n2. Pensez à bien joindre un document mentionnant votre nom, adresse e-mail, le bon de commande et le détail des pannes  constatées. Ce petit bout de papier (ou paragraphe sur un papier déjà existant) facilitera et donc accélérera la prise en charge par nos techniciens.\n\n3. Sauvegardez vos données personnelles. Pour les   Iphone, copiez/collez ce lien https://support.apple.com/fr-fr/HT203977 Pour Samsung, copiez/collez ce lien http://www.samsung.com/fr/support/usefulsoftware/KIES/ Pour les autres marques, rendez-vous sur  les sites des constructeurs.\n\n4. Ne renvoyez pas votre carte SIM et/ou carte SD, vous devez la/les garder.\n\n5. Emballez bien le produit et les accessoires et mettez-les dans un carton ou dans la   boite reçu avec l’appareil.\n\n6. Répondez à ce mail en envoyant votre numéro de suivi, une fois le colis posté. Merci de nous fournir votre adresse de retour si elle est différente.\n\n7. Réinitialiser votre téléphone avec les paramètre d\'usine - \nPour Apple Aller dans Réglages --> Aller dans la section iCloud --> Désactiver l\'option 'localiser mon  iPhone' --> Saisir l\'identifiant Apple Client - \nPour Android Aller dans Paramètres --> Allez dans la section Sauvegarder et réinitialiser (OU Gestion globale/Réinitialisation selon la version   Android) --> Sélectionner 'Réinitialiser toutes les données' et confirmer - \nPour Windows phone Aller dans Paramètres' --> Appuyez sur le sous-menu 'À propos de' --> \nDéfilez l\'écran de bas en haut  et appuyez sur 'Réinitialiser votre téléphone'\n\nLa remise en main propre est impossible.\n\nAucun appareil de remplacement n\'est fourni pendant le retour en SAV.\n\nCependant, si la panne ne rentre   pas dans la garantie (oxydation, chute...), nous ne pourrons pas effectuer de réparation et vous renverrons votre téléphone tel quel à vos frais.\n\nN\’hésitez pas à nous recontacter si vous avez des   questions. En espérant avoir répondu àtoutes vos attentes,\n\nCordialement,\nLe service client MobileRachat.");
        break;
      case 'Rétractation':
        $("#id_message").val("Bonjour,\n\nMerci de lire le mail attentivement, jusqu\'au bout et de suivre la totalité des indications.\n\nVoici les étapes à suivre pour nous retourner le produit dans le cadre   de la rétractation et obtenir le remboursement :\n\n1. Expédiez le colis depuis La Poste ou le transporteur de votre choix à l\'adresse ci-dessous (un envoi suivi est conseillé) :\n\nSociété LEGSM\n10  Rue Lebouis\n75014 Paris\n\n2. Pensez à bien joindre un document mentionnant votre nom, adresse e-mail, le bon de commande et le détail des pannes constatées. Ce petit bout de papier (ou paragraphe sur  un papier déjà existant) facilitera et donc accélérera la prise en charge par nos techniciens.\n\nLa remise en main propre est impossible.\n\nSi l’appareil ne rentre pas dans la garantie (oxydation,   chute...), nous ne pourrons pas effectuer de remboursement.\n\nN’hésitez pas à nous recontacter si vous avez des questions. En espérant avoir répondu à toutes vos attentes,\n\nCordialement,\nLe service   client MobileRachat.");
        break;
      case 'Rétractation Bon Chrono':
        $("#id_message").val("Bonjour,\nMerci de lire le mail attentivement, jusqu\'au bout et de suivre la totalité des indications,\n\nVoici les étapes à suivre pour nous retourner le produit dans le cadre de  la rétractation et obtenir le remboursement : \n\n1. Veuillez trouver ci-joint le bon prépayé Chronopost qu\'il vous faudra coller sur le colis lors de l\'envoi (vous le trouverez en pièce jointe en   vous connectant à votre compte et vous rendant dans notre échange.)\n\n2. Pensez à bien joindre un document mentionnant votre nom, adresse e-mail, le bon de commande et le détail des pannes constatées.   Ce petit bout de papier (ou paragraphe sur un papier déjà existant) facilitera et donc accélérera la prise en charge par nos techniciens.\n\n3. Sauvegardez vos données personnelles. Pour les Iphone,  copiez/collez ce lien https://support.apple.com/fr-fr/HT203977 Pour Samsung, copiez/collez ce lien http://www.samsung.com/fr/support/usefulsoftware/KIES/ Pour les autres marques, rendez-vous sur les   sites des constructeurs.\n\n4. Ne renvoyez pas votre carte SIM et/ou carte SD, vous devez la/les garder.\n\n5. Emballez bien le produit et les accessoires et mettez-les dans un carton ou dans la boite  reçu avec l\'appareil. \n\n6. Répondez à ce mail en envoyant votre numéro de suivi, une fois le colis posté : Nous procéderons au remboursement dans les 5 jours ouvrés après réception de votre appareil  dans nos locaux. \n\n7. Réinitialiser votre téléphone avec les paramètre d\'usine -\nPour Apple Aller dans Réglages --> Aller dans la section iCloud --> Désactiver l\'option 'localiser mon iPhone' -->   Saisir l\'identifiant Apple Client - \nPour Android Aller dans Paramètres --> Allez dans la section Sauvegarder et réinitialiser (OU Gestion globale/Réinitialisation selon la version Android) -->   Sélectionner 'Réinitialiser toutes les données' et confirmer - \nPour Windows phone Aller dans Paramètres' --> Appuyez sur le sous-menu 'À propos de' --> Défilez l\'écran de bas en haut et appuyez sur  'Réinitialiser votre téléphone'\n\nLa remise en main propre est impossible.\n\nAucun appareil de remplacement n\'est fourni pendant le retour en SAV.\n\nCependant, si la panne ne rentre pas dans la  garantie (oxydation, chute...), nous ne pourrons pas effectuer de réparation et vous renverrons votre téléphone tel quel à vos frais.\n\n N\'hésitez pas à nous recontacter si vous avez des questions. En   espérant avoir répondu à toutes vos attentes,\n\nCordialement,\nLe service client MobileRachat.");
        break;
      case 'Réinitialisation Apple jusqu\'au 6S':
        $("#id_message").val("Bonjour,\n\nAvant de procéder à un retour de l\'appareil, il se peut qu\'il s'agisse d'une simple panne logicielle. Pour en être sûr, pouvez-vous essayez de restaurer votre  téléphone?\n\nPour cela, veuillez connecter le mobile à votre ordinateur au travers du logiciel Apple iTunes.\nAppuyez simultanément sur les boutons verrouiller/déverrouiller ainsi que le bouton   HOME.\nTenez la position assez longtemps pour voir apparaître le logo iTunes sur votre téléphone ( environ 20 secondes ). A présent, vous avez la possibilité de procéder à la restauration complète des  paramètres d'usine de l'appareil. Pensez à sauvegarder vos données avant, car cette manipulation va effacer tout ce qui se trouve sur l'appareil.\nMerci de tester votre appareil après restauration sans  réinstaller quoique ce soit en premier lieu.\nEffectuez si possible les dernières mises à jour.\nSi après cette manipulation vous rencontrez toujours le même problème, merci de nous recontacter pour que   nous procédions au retour du téléphone.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Réinitialisation Apple':
        $("#id_message").val("Bonjour,\n\nAvant de procéder à un retour de l'appareil, il se peut qu'il s'agisse d'une simple panne logicielle. Pour en être sûr, pouvez-vous essayez de restaurer votre  téléphone?\n\nPour cela, veuillez connecter le mobile à votre ordinateur au travers du logiciel Apple iTunes. Appuyez simultanément sur les boutons ON/OFF et volume bas. Tenez la position assez  longtemps pour voir apparaître le logo iTunes sur votre téléphone ( environ 20 secondes ). A présent, vous avez la possibilité de procéder à la restauration complète des paramètres d'usine de  l'appareil. Pensez à sauvegarder vos données avant, car cette manipulation va effacer tout ce qui se trouve sur l'appareil. \nMerci de tester votre appareil après restauration sans réinstaller quoique   ce soit en premier lieu. \nEffectuez si possible les dernières mises à jour. \nSi après cette manipulation vous rencontrez toujours le même problème, merci de nous recontacter pour que nous procédions  au retour du téléphone. \n\nCordialement, \nLe service client MobileRachat");
        break;
      case 'Réinitialisation Samsung':
        $("#id_message").val("Bonjour,\n\nIl peut s'agir d'un problème logiciel. Cela peut être corrigé en effectuant une remise à zéro de l'appareil. Pour cela, éteignez l'appareil, appuyez simultanément sur  les boutons suivants : bouton central, bouton d'allumage, et bouton volume +. Gardez la position assez longtemps. Le téléphone va s'éteindre et s'allumer, et vous aurez accès alors à un menu de  restauration. \nChoisissez l'option 'wipe data factory reset'.\n\nPensez à sauvegarder vos données avant, car cette manipulation va effacer tout ce qui se trouve sur l'appareil. Si vous constatez  toujours les même problèmes après la restauration, nous envisagerons un retour en SAV.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Réinitialisation Huawei':
        $("#id_message").val("Bonjour,\n\nAvant de procéder à un retour de l'appareil, il se peut qu'il s'agisse d'une simple panne logicielle. Pour en être sûr, pouvez-vous essayez de restaurer votre téléphone  ? \n\nPour cela :\n\n- Faites un appui long simultanément sur les touches marche/arrêt et volume plus pendant 10 secondes.\n- Le mobile s'éteint puis se rallume.\n- Relâchez le bouton marche/arrêt   uniquement.\n- Patientez quelques instants.\n- Sélectionnez Wipe data/factory reset à l'aide de la touche volume moins.\n- Sélectionnez Wipe cache\n- Validez avec le bouton marche/arrêt.\n- Confirmez   votre choix.\n- Le mobile se réinitialise.\n- Sélectionnez Reboot system now.\n- Le mobile se rallume.\n- Procédez au redémarrage du mobile.\n\nCordialement,\nLe service client MobileRachat.");
        break;
   	  case 'Réinitialisation Xperia':
        $("#id_message").val("Bonjour,\n\nIl peut s'agir d'un problème logiciel. Cela peut être corrigé en effectuant une réparation logicielle.\n\nPour cela, vous pouvez télécharger Xperia Companion sur votre   ordinateur, lancez le logiciel et effectuer une réparation logicielle, suivez les étapes indiquées (l'opération peut prendre une trentaine de minutes) et rallumez l'appareil avant de refaire les  tests.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Micro Téléphone':
        $("#id_message").val("Bonjour,\n\nLa question peut paraître idiote mais le micro de l'appareil est-il bien tenu près de la bouche de l'appelant ?\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Nettoyage Ecouteur Appel':
        $("#id_message").val("Bonjour,\n\nIl est possible que votre écouteur appel soit obstrué, un simple nettoyage est peut-être suffisant.\n\nVoici donc la marche à suivre pour un nettoyage optimal :\n\nAvec  un coton tige imbibé de dissolvant, passez sur les grilles de l’écouteur appel ainsi que du haut-parleur en bas.\nEnsuite avec une aiguille, grattez les grilles en haut et en bas.\nPassez un petit coup  de bombe à pression si vous en avez et le tour est joué.\n\nSi vous avez peur de mal faire les choses, nous pourrons faire revenir l'appareil à nos frais pour un nettoyage.\n\nSi la manipulation   fonctionne, veuillez nous excuser d'avoir expédié un appareil mal nettoyé.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Attente Echange':
        $("#id_message").val("Bonjour,\n\nVotre appareil a été jugé irréparable par nos techniciens, nous cherchons actuellement un mobile de remplacement en adéquation avec votre commande pour que vous n'ayez   plus de soucis avec votre appareil.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'iCloud':
        $("#id_message").val("Bonjour,\n\nNous nous permettons de vous contacter suite au retour de nos techniciens concernant votre iPhone. Ces derniers ont constaté qu'un compte iCloud était toujours lié à   l'appareil. Nous aurions besoin que vous le retiriez pour pouvoir le tester dans de bonnes conditions.\n\nPourriez-vous désactiver cette application ?\n\nSi vous ne savez pas comment procéder, merci de   suivre ce lien : http://www.andromac.fr/questions-frequentes/comment-desactiver-la-fonction-localiser-mon-iphone-si-mon-iphone-ne-sallume-plus.\nMerci de noter que cette manipulation est possible depuis  un ordinateur, elle est donc valable pour les appareils qui ne s'allumeraient plus.\n\nDans l'attente de vos nouvelles.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Diagnostic En Cours':
        $("#id_message").val("Bonjour,\n\nVotre appareil est actuellement dans notre atelier entre les mains de nos techniciens, nous devrions avoir un retour de leur part d'ici peu.\n\nCordialement,\nLe   service client MobileRachat.");
        break;
      case 'Sélection Réseau Samsung':
        $("#id_message").val("Bonjour,\n\nVous pouvez sélectionner un meilleur réseau, pour cela, rendez-vous dans les paramètres->connexions->Réseaux mobiles->Opérateurs réseau->Recherche de réseaux et une  fois la recherche terminée, appuyez sur Sélection automatique.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Oubli Accessoire':
        $("#id_message").val("Bonjour,\n\nNous sommes désolés pour ce petit oubli, nous expédions l'accessoire manquant ce jour.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Proposition Echange':
        $("#id_message").val("Bonjour,\n\nNous n'avons pas d'appareil équivalent en tout point au vôtre en stock actuellement, pour vous éviter d'attendre nous pouvons vous proposer un :\n Est-ce que cela vous   conviendrait ?\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Exclusion De Garantie':
        $("#id_message").val("Bonjour,\n\nVotre appareil vous a été vendu en grade Shiny soit dans le même état qu'un appareil vendu neuf.\n\nLa garantie nous empêchant de prendre en charge un appareil revenant  cassé, tordu, oxydé ou ayant subis des impacts trop importants, nous ne pourrons pas intervenir dessus.\n\nVotre appareil est donc mis à disposition dans l’attente du règlement des frais de renvoi de  10€ pour une livraison à domicile par colissimo, ou de 12€ pour une livraison à domicile par chronopost.\nLe règlement peut se faire par chèque à l’ordre de la société LEGSM et à renvoyer à l’adresse  suivante :\n\nSociété LEGSM\n10 Rue Lebouis\n75014 Paris\n\nVous pouvez également régler ces frais via la plateforme Paypal à contact@legsm.com.Dans ce cas, merci de référer le nom ayant servi à la  commande ou un numéro de commande/facture.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Tarif Renvoi Refus':
        $("#id_message").val("Bonjour,\n\nVotre appareil est mis à disposition dans l’attente du règlement des frais de renvoi de 10€ pour une livraison à domicile par colissimo, ou de 12€ pour une livraison à   domicile par chronopost.\n\nLe règlement peut se faire par chèque à l’ordre de la société LEGSM et à renvoyer à l’adresse suivante :\n\nSociété LEGSM\n10 Rue Lebouis\n75014 Paris\n\nVous pouvez   également régler ces frais via la plateforme Paypal à contact@legsm.com. Dans ce cas, merci de référer le nom ayant servi à la commande ou un numéro de commande/facture.\n\nCordialement,\nLe service  client MobileRachat");
        break;
      case 'Garantie Dépassée':
        $("#id_message").val("Bonjour,\n\nLe délai de garantie couvrant votre appareil est désormais dépassé. Nous ne pourrons pas intervenir et vous invitons à contacter BackMarket à l'adresse suivante  bonjour@backmarket.fr dans le cas où vous avez souscrit à une assurance ou une extension de garantie.\n\nCordialement,\nLe service client MobileRachat.");
        break;
      case 'Colis Perdu Ou Volé':
        $("#id_message").val("Bonjour,\n\nSi votre colis n'est pas indiqué comme livré.\n\nNous vous demandons de bien vouloir nous fournir une lettre de dénégation de réception (exemple en pièce jointe) ainsi   que la copie de votre pièce d'identité recto-verso.\n\nNous vous remercions également de nous fournir une attestation sur l'honneur vous engageant à refuser ou retourner le colis s'il venait à vous être  présenté.\n\nUne fois les documents reçus, nous les transmettrons à Chronopost.\n\nDans l'attente des documents.\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Transmission Document Chrono':
        $("#id_message").val("Bonjour,\n\nNous vous remercions pour les documents.\n\nNous les transmettons à notre service logistique afin qu'ils examinent la conformité de ces derniers.\n\nCordialement,\nLe  service client MobileRachat");
        break;
      case 'Contestation De Livraison':
        $("#id_message").val("Bonjour,\n\nVotre colis est indiqué comme livré, et vous contestez la livraison de votre colis.\n\nNous vous demandons de bien vouloir nous fournir une lettre de dénégation de   signature (exemple en pièce jointe) ainsi que la copie de votre pièce d'identité recto-verso.\n\nNous vous remercions également de nous fournir une copie d'un dépôt de plainte, fait au commissariat ou à  la gendarmerie la plus proche pour vol, et une attestation sur l'honneur vous engageant à refuser ou retourner le colis s'il venait à vous être présenté.\n\nUne fois les documents reçus, nous les  transmettrons à Chronopost.\n\nDans l'attente des documents,\n\nCordialement,\nLe service client MobileRachat");
        break;
      case 'Expédition Commande':
        $("#id_message").val("Bonjour,\n\nLe délai de 24h est valable pour les jours ouvrés. Si vous commandez un week-end, un jour férié ou trop tard dans la journée (après 13h) votre commande ne sera prise en  compte que le prochain jour (ouvré). Votre commande sera bien expédiée ce jour, pour une livraison demain entre 9h et 13h par Chronopost.\n\nCordialement,\nLe service client MobileRachat.");
        break;
      case 'Plus De 6 Mois':
        $("#id_message").val("Bonjour,\n\nCela fait maintenant plus de 6 mois que votre appareil est dans nos locaux. D'après notre charte, il vous reste une semaine pour régler les frais de renvoi et récupérer l'appareil avant qu'il ne soit recyclé.\n\nCordialement,\nLe service client MobileRachat.");
        break;
  		}
});
}

if(node != null) {
  var href = node.href;
	var page = parseInt(href.slice(-1)); 
}

if(pageRate != null) {
	node.href = "?country=&lower=&rate_and_desc=rate&upper=&page="+page;

	if(page > 2) {
  	page = page - 2;
  	nodeBack.href = "?country=&lower=&rate_and_desc=rate&upper=&page="+page;
	}
}

if(pageRate && window.location.href == "https://www.backmarket.fr/bo_merchant/rates/"){
	window.location.href = "https://www.backmarket.fr/bo_merchant/rates/?country=&lower=&rate_and_desc=rate&upper=";
}

if(pageListing && window.location.href == "https://www.backmarket.fr/bo_merchant/listings"){
	window.location.href = "https://www.backmarket.fr/bo_merchant/listings?page=None&lid=&price=&pid=&mpk=&warranty_delay=&sku=&publication_state=&order_by=&title=&state=&quantity=&order_by=-quantity";
}

if(pageSav != null) {  
	var input14=document.createElement("input");
	input14.type="button";
	input14.value="Ouvrir tous les SAV";
	input14.onclick = showAlert14;
	input14.setAttribute("style", "width:200px;position:fixed;bottom:400px;right:150px;");
	input14.setAttribute("class", "btn btn-success");
	document.body.appendChild(input14); 
	
}

function showAlert14()
{
  var savItems = document.getElementsByClassName("list");
 	var arr2 = Array.prototype.slice.call( savItems[0].children[1].children );  
  arr2.forEach(function(element) {
    var win = window.open(element.cells[8].childNodes[1].href, '_blank');
    win.focus();
  });
}
