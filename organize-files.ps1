# Script para organizar arquivos e remover duplicatas antigas
# Execute este script na raiz do projeto

Write-Host "🗂️  Organizando arquivos do projeto..." -ForegroundColor Cyan
Write-Host ""

# Lista de arquivos antigos para remover
$arquivosAntigos = @(
    "curso_front-end.html",
    "checkout.html",
    "style.css",
    "script.js"
)

# Contador de arquivos removidos
$removidos = 0

foreach ($arquivo in $arquivosAntigos) {
    if (Test-Path $arquivo) {
        Write-Host "🗑️  Removendo: $arquivo" -ForegroundColor Yellow
        Remove-Item $arquivo -Force
        $removidos++
    } else {
        Write-Host "✓  Já removido: $arquivo" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "✅ Organização concluída!" -ForegroundColor Green
Write-Host "   Arquivos removidos: $removidos" -ForegroundColor Cyan
Write-Host ""
Write-Host "📁 Estrutura atual:" -ForegroundColor Cyan
Write-Host "   ├── assets/" -ForegroundColor White
Write-Host "   │   ├── css/" -ForegroundColor White
Write-Host "   │   │   ├── style.css" -ForegroundColor Green
Write-Host "   │   │   └── checkout.css" -ForegroundColor Green
Write-Host "   │   └── js/" -ForegroundColor White
Write-Host "   │       ├── main.js" -ForegroundColor Green
Write-Host "   │       └── checkout.js" -ForegroundColor Green
Write-Host "   ├── pages/" -ForegroundColor White
Write-Host "   │   └── checkout.html" -ForegroundColor Green
Write-Host "   ├── index.html" -ForegroundColor Green
Write-Host "   └── ..." -ForegroundColor White
Write-Host ""
