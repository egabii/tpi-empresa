import React from 'react'

export default function Documentacion() {
    return (
        <div>
            <div>
                <h2>Subir Documentacion</h2>
                <hr/>
            </div>
            <div>
                <form>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple/>
                    </div>
                </form>
            </div>
        </div>
    )
}
