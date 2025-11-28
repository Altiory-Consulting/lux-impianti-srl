import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { LogOut, Mail, Phone, MessageSquare, Calendar, User as UserIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Lead {
  id: string;
  name: string;
  email: string;
  interest: string;
  subject: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUser(session.user);
    
    // Verifica se l'utente ha il ruolo admin
    const { data: roleData, error: roleError } = await supabase
      .rpc('has_role', { 
        _user_id: session.user.id, 
        _role: 'admin' 
      });

    if (roleError || !roleData) {
      toast.error("Non hai i permessi per accedere a questa sezione");
      navigate("/");
      return;
    }

    fetchLeads();
  };

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setLeads(data || []);
    } catch (error: any) {
      toast.error("Errore nel caricamento dei lead");
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout effettuato");
    navigate("/");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInterestBadge = (interest: string) => {
    const colors: Record<string, string> = {
      fotovoltaico: "bg-yellow-500",
      solare: "bg-orange-500",
      "pompa-calore": "bg-blue-500",
      climatizzazione: "bg-cyan-500",
      geotermico: "bg-green-500",
      biomasse: "bg-brown-500",
      "reddito-energetico": "bg-lime-500",
      manutenzione: "bg-gray-500",
      consulenza: "bg-purple-500",
      altro: "bg-pink-500",
    };

    return (
      <Badge className={colors[interest] || "bg-gray-500"}>
        {interest}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Caricamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Pannello Admin</h1>
              <p className="text-muted-foreground">
                Benvenuto, {user?.email}
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Richieste di Contatto ({leads.length})
              </CardTitle>
              <CardDescription>
                Tutte le richieste ricevute dal form di contatto
              </CardDescription>
            </CardHeader>
            <CardContent>
              {leads.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Nessuna richiesta di contatto al momento
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Interesse</TableHead>
                        <TableHead>Oggetto</TableHead>
                        <TableHead>Messaggio</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell className="whitespace-nowrap">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {formatDate(lead.created_at)}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <UserIcon className="h-4 w-4 text-muted-foreground" />
                              {lead.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <a
                                href={`mailto:${lead.email}`}
                                className="text-primary hover:underline"
                              >
                                {lead.email}
                              </a>
                            </div>
                          </TableCell>
                          <TableCell>
                            {getInterestBadge(lead.interest)}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {lead.subject}
                          </TableCell>
                          <TableCell className="max-w-md">
                            <div className="line-clamp-2 text-sm text-muted-foreground">
                              {lead.message}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
