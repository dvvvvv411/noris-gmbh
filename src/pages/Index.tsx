import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Professional Header */}
      <header className="professional-header text-primary-foreground">
        <div className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Lu.Ma.Service GmbH</h1>
        <p className="text-primary-foreground/80">Willy-Terbuyken-Str. 2, 40627 Düsseldorf</p>
        </div>
      </header>

      {/* Main Content - Flex Grow */}
      <main className="container mx-auto px-4 py-6 md:py-12 space-y-6 md:space-y-12 flex-1">
        {/* Insolvency Notice */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="insolvency-notice rounded-lg p-4 md:p-8 mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-destructive mb-4">
                Insolvenzverfahren eröffnet
              </h1>
              <p className="text-lg text-foreground mb-4">
                Das Insolvenzverfahren über das Vermögen der Lu.Ma.Service GmbH wurde eröffnet.
              </p>
              <p className="text-base text-muted-foreground">
                Es werden keine Geschäfte mehr durchgeführt. Alle geschäftlichen Anfragen sind an den Insolvenzverwalter zu richten.
              </p>
            </div>
          </div>
        </section>

        {/* Administrator Contact - Main Focus */}
        <section className="max-w-4xl mx-auto">
          <Card className="administrator-card">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl gold-accent mb-2">Ansprechpartner</CardTitle>
              <p className="text-muted-foreground text-lg">Für alle Anfragen wenden Sie sich bitte an den Insolvenzverwalter</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Philip Neiseke</h3>
                <p className="gold-accent font-semibold text-lg">Rechtsanwalt</p>
                <p className="text-muted-foreground text-base">Fachanwalt für Insolvenzrecht</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">Adresse</p>
              <p className="text-muted-foreground">Kanzlerstr. 1</p>
              <p className="text-muted-foreground">40472 Düsseldorf</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">Telefon</p>
                <a href="tel:+493086320201" className="gold-accent hover:underline text-lg">
                  (030) 863202010
                </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">E-Mail</p>
              <a href="mailto:p.neiseke@anwaelte-neiseke-hagedorn.de" className="gold-accent hover:underline">
                p.neiseke@anwaelte-neiseke-hagedorn.de
              </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Globe className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-lg">Website</p>
              <a href="https://anwaelte-neiseke-hagedorn.de" target="_blank" rel="noopener noreferrer" className="gold-accent hover:underline">
                anwaelte-neiseke-hagedorn.de
              </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="professional-button text-lg px-8 py-3">
                    <a href="tel:+493086320201">
                      <Phone className="h-5 w-5 mr-2" />
                      Anrufen
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-3">
                    <a href="mailto:p.neiseke@anwaelte-neiseke-hagedorn.de">
                      <Mail className="h-5 w-5 mr-2" />
                      E-Mail senden
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-3">
                    <a href="https://anwaelte-neiseke-hagedorn.de" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5 mr-2" />
                      Zur Kanzlei Website
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company History */}
        <section className="max-w-4xl mx-auto">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Unternehmensgeschichte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
            <h4 className="text-xl font-semibold text-foreground mb-3">Logistik und Güterverkehr in Düsseldorf</h4>
            <p className="text-muted-foreground mb-4">
              Die Lu.Ma.Service GmbH ist ein Logistikunternehmen in Düsseldorf, das sich auf den gewerblichen Güterverkehr mit Fahrzeugen bis 3,5 Tonnen zulässigem Gesamtgewicht spezialisiert hat. Das Unternehmen vermittelt Frachten, Transporte und Dienstleistungen und handelt mit Holz, genormten Baufertigteilen sowie Kraftfahrzeugen einschließlich deren Vermietung.
            </p>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-foreground">Geschäftsführerin:</span>
                    <span className="ml-2 text-muted-foreground">Grozdana Todorovic</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Spezialisierung:</span>
                    <span className="ml-2 text-muted-foreground">Güterverkehr, Frachtenvermittlung und Handel</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Company Information */}
        <section className="max-w-4xl mx-auto">
          <Card className="premium-card">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Unternehmensinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">Lu.Ma.Service GmbH</h4>
                  <div className="space-y-1 text-muted-foreground">
              <p>Willy-Terbuyken-Str. 2</p>
              <p>40627 Düsseldorf</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">info@lu-ma-service.de</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">lu-ma-service.de</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="professional-header text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="text-center">
            <p className="mb-3 text-lg">
              <strong>Wichtiger Hinweis:</strong> Die Lu.Ma.Service GmbH befindet sich im Insolvenzverfahren.
            </p>
            <p className="text-primary-foreground/80">
              Alle geschäftlichen Anfragen sind ausschließlich an den Insolvenzverwalter zu richten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
