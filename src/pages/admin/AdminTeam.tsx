import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamApi, ApiTeamMember } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface TeamFormData {
  name: string;
  position: string;
  skills: string;
  linkedin_link: string;
  email: string;
}

const initialFormData: TeamFormData = {
  name: '',
  position: '',
  skills: '',
  linkedin_link: '',
  email: '',
};

const AdminTeam = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<ApiTeamMember | null>(null);
  const [formData, setFormData] = useState<TeamFormData>(initialFormData);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: team = [], isLoading } = useQuery({
    queryKey: ['admin-team'],
    queryFn: teamApi.getAll,
  });

  const createMutation = useMutation({
    mutationFn: teamApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-team'] });
      toast({ title: 'Team member created successfully' });
      closeDialog();
    },
    onError: () => toast({ title: 'Failed to create team member', variant: 'destructive' }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ApiTeamMember> }) => teamApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-team'] });
      toast({ title: 'Team member updated successfully' });
      closeDialog();
    },
    onError: () => toast({ title: 'Failed to update team member', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: teamApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-team'] });
      toast({ title: 'Team member deleted successfully' });
    },
    onError: () => toast({ title: 'Failed to delete team member', variant: 'destructive' }),
  });

  const openCreateDialog = () => {
    setEditingMember(null);
    setFormData(initialFormData);
    setIsDialogOpen(true);
  };

  const openEditDialog = (member: ApiTeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      position: member.position,
      skills: member.skills.join(', '),
      linkedin_link: member.linkedin_link || '',
      email: member.email || '',
    });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingMember(null);
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const memberData = {
      name: formData.name,
      position: formData.position,
      skills: formData.skills.split(',').map((s) => s.trim()).filter(Boolean),
      linkedin_link: formData.linkedin_link || undefined,
      email: formData.email || undefined,
    };

    if (editingMember) {
      updateMutation.mutate({ id: editingMember._id, data: memberData });
    } else {
      createMutation.mutate(memberData);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) {
    return <div className="text-muted-foreground">Loading team members...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Manage Team</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingMember ? 'Edit Team Member' : 'Add New Team Member'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g., React, TypeScript, Node.js"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin_link">LinkedIn URL</Label>
                <Input
                  id="linkedin_link"
                  type="url"
                  value={formData.linkedin_link}
                  onChange={(e) => setFormData({ ...formData, linkedin_link: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={closeDialog}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {editingMember ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((member) => (
                <TableRow key={member._id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.email || '-'}</TableCell>
                  <TableCell>{member.skills.slice(0, 2).join(', ')}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(member)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(member._id)}
                      disabled={deleteMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {team.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No team members found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTeam;
