export class ToHtml {
    
    /**
     * static : l'attribut placeholder peut etre référencé sans faire une instance dans la classe tohtml (constante de classe)
     * readonly : valeur de l'attribut est uniquement accessible en lecture
     * constant de type 'any' et est égale à document (objet interne à JS, = document actif chargé dans le navigateur = index.html = SPA (single Page application))
     * méthode 'querySlector' (=permet de piocher dans ts le doc la partie qui nous interesse)
     * DOM : Document object model
     * innerHTML : récupérer le contenu existant de myApp dans le document 
     * 
     * */
    private static readonly placeholder: string = 'myApp'; 

    public toPage(object: any, howTo: number = 1) {
        const htmlPLaceHolder: JQuery = $('[' + ToHtml.placeholder + ']');
        let content: string = htmlPLaceHolder.html();
        content += object.toString(howTo);
        htmlPLaceHolder.html(content);
    }

    public appendToPage(object: JQuery): void {
        const placeholder: JQuery = $('[' + ToHtml.placeholder + ']');
        object.appendTo(placeholder);
    }
}