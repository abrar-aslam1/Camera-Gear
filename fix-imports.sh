#!/bin/bash

# Fix imports in photography pages
find app/photography -name "*.tsx" -type f -exec sed -i '' 's/import { Badge } from "'\''components\/ui\/badge"'\'' (see below for file content)/import { Badge } from "@\/components\/ui\/badge"/g' {} +
find app/photography -name "*.tsx" -type f -exec sed -i '' 's/import { Card, CardContent } from "'\''components\/ui\/card"'\'' (see below for file content)/import { Card, CardContent } from "@\/components\/ui\/card"/g' {} +
find app/photography -name "*.tsx" -type f -exec sed -i '' 's/import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "'\''components\/ui\/table"'\'' (see below for file content)/import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@\/components\/ui\/table"/g' {} +
