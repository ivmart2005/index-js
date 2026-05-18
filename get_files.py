import os
from pathlib import Path

def find_project_files(base_path):
    project_files = []
    # Сканируем текущую папку (src) и вложенные
    target_dirs = ['pages', 'app', 'features', 'components']
    
    for dir_name in target_dirs:
        full_dir_path = base_path / dir_name
        if full_dir_path.exists() and full_dir_path.is_dir():
            for root, _, files in os.walk(full_dir_path):
                # Ограничиваем рекурсию, чтобы не уйти слишком глубоко, если нужно
                for file in files:
                    if file.endswith(('.ts', '.tsx', '.css', 'scss')):
                        project_files.append(Path(root) / file)
    return sorted(list(set(project_files)))

def export_files_to_txt(files, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in files:
            try:
                # Имя файла для заголовка
                outfile.write(f"Файл: {file_path.name}\n" + "="*40 + "\n")
                with open(file_path, 'r', encoding='utf-8') as infile:
                    outfile.write(infile.read())
                outfile.write("\n\n")
            except Exception as e:
                print(f"Ошибка в {file_path}: {e}")

if __name__ == "__main__":
    # Указываем текущую папку как базу (раз скрипт внутри src)
    src_dir = Path.cwd()
    output = "project_code.txt"
    
    files = find_project_files(src_dir)
    if files:
        export_files_to_txt(files, output)
        print(f"✅ Готово. Собрано файлов: {len(files)}")
    else:
        print("❌ Файлы не найдены.")