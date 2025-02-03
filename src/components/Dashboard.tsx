"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

const menuItems = [
  { name: "Home", icon: <FiHome />, route: "/dashboard" },
  { name: "Profile", icon: <FiUser />, route: "/dashboard/profile" },
  { name: "Settings", icon: <FiSettings />, route: "/dashboard/settings" },
];

const tableData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

export default function Dashboard() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-center mb-6">Dashboard</h2>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant={active === item.name ? "default" : "outline"}
              className="w-full flex items-center space-x-2"
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>{active}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Welcome to the {active} section of the dashboard.</p>
            <Table className="mt-6">
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
